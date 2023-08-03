import { Button, Typography } from '@mui/material';
import icon from '../../assets/icon.png'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import userloggedinState, { userState } from '../Atom'


const Navbar = () => {
    const navigate = useNavigate();
    const [loggedin, setLoggedin] = useRecoilState(userloggedinState);
    const [user, setUser] = useRecoilState(userState);

    const handleLogout = () => {
        localStorage.removeItem('usertoken')
        setLoggedin(false)
        setUser('');
        navigate('/')
    }

    useEffect(() => {
        axios({
            url: 'http://localhost:3000/user/me',
            method: 'get',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('usertoken')}`
            }
        }).then((res) => {
            setLoggedin(true)
            setUser(res.data.username)
        }
        )
    }, [])

    if (loggedin) {
        return (
            <nav className="navbar">
                <div className="navbar-brand" style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}>
                    <img src={icon} alt="" />
                    <Typography variant="body1">EDUFLEX</Typography>
                </div>
                <div className="navbar-buttons">
                    <Typography className='center' variant="body1">Hi! {user}</Typography>
                    <Button variant="contained" onClick={handleLogout}>LOGOUT</Button>
                </div>
            </nav>
        )
    }

    return (

        <nav className="navbar">
            <div className="navbar-brand" style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}>
                <img src={icon} alt="" />
                <Typography variant="body1">EDUFLEX</Typography>
            </div>
            <div className="navbar-buttons">
                <Button variant="contained" onClick={() => navigate('/login')}>LOGIN</Button>
                <Button variant="contained" onClick={() => navigate('/signup')}>SIGNUP</Button>
            </div>
        </nav>
    )
}

export default Navbar

