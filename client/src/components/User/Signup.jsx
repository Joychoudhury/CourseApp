import { Alert, Button, Card, TextField, Typography } from '@mui/material'
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import userloggedinState, { userState } from '../Atom'
import Navbar from './Navbar';


const Signup = () => {
    const navigate = useNavigate();
    const setUser = useSetRecoilState(userState);
    const setLoggedin = useSetRecoilState(userloggedinState);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)


    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:3000/user/signup', { username, password })
            const res = response.data;
            localStorage.setItem('usertoken', res.token)
            setLoggedin(true);
            setUser(username)
            navigate('/')
        } catch {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000);
        }
    }




    return (
        <div className="">
            <Navbar />
            <div className="center">
                {
                    alert &&
                    <Alert className='error' id='error' severity="error">Username already taken !</Alert>
                }
            </div>

            <div className='center bg'>
                <Card style={{ margin: '4rem' }} className='card' variant="outlined">
                    <FingerprintIcon fontSize='large' style={{ color: '#97FEED' }} />

                    <Typography variant='h6' >SIGN UP</Typography>
                    <TextField value={username} fullWidth={true} label="Username*" onChange={(e) => setUsername(e.target.value)} variant="outlined" />
                    <TextField value={password} type='password' fullWidth={true} label="Password*" onChange={(e) => setPassword(e.target.value)} variant="outlined" />

                    <Button fullWidth={true} variant="contained" onClick={handleSignup}>SUBMIT</Button>

                    <Typography variant='body2' >Already have a account ? <span onClick={() => navigate('/login')} style={{ color: '#2CD3E1', cursor: 'pointer' }}>Login</span></Typography>
                </Card>
            </div>
        </div>
    )
}

export default Signup