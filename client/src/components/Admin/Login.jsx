import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { Alert, Button, Card, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { adminloggedinState, adminState } from '../Atom'
import Navbar from './Navbar';



const Login = () => {
    const navigate = useNavigate();
    const setUser = useSetRecoilState(adminState);
    const setLoggedin = useSetRecoilState(adminloggedinState);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/admin/login', {}, { headers: { username, password } })
            const res = response.data;
            localStorage.setItem('token', res.token)
            setLoggedin(true)
            setUser(username)
            navigate('/admin')
        }
        catch {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="center">
                {
                    alert &&
                    <Alert className='error' id='error' severity="error">Invalid Username or Password!</Alert>
                }
            </div>
            <div className='center bg' >
                <Card style={{ margin: '4rem' }} className='card' variant="outlined">
                    <FingerprintIcon fontSize='large' style={{ color: '#97FEED' }} />

                    <Typography variant='h6' >LOGIN</Typography>
                    <TextField value={username} fullWidth={true} label="Username*" onChange={(e) => setUsername(e.target.value)} variant="outlined" />
                    <TextField value={password} fullWidth={true} label="Password*" onChange={(e) => setPassword(e.target.value)} variant="outlined" />

                    <Button fullWidth={true} variant="contained" onClick={handleLogin}>SUBMIT</Button>

                    <Typography variant='body2' >Dont have a account ? <span onClick={() => navigate('/admin/signup')} style={{ color: '#2CD3E1', cursor: 'pointer' }}>Register</span></Typography>
                </Card>
            </div>
        </div>
    )
}

export default Login