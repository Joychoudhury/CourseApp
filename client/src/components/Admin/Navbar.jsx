import { Button, Typography } from '@mui/material';
import icon from '../../assets/icon.png'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { adminloggedinState, adminState } from '../Atom'


const Navbar = () => {
    const navigate = useNavigate();
    const [loggedin, setLoggedin] = useRecoilState(adminloggedinState);
    const [user, setUser] = useRecoilState(adminState);

    const handleLogout = () => {
        localStorage.removeItem('token')
        setLoggedin(false)
        setUser('')
        navigate('/admin');
    }

    const handleMe = async () => {
        try {
            axios({
                url: 'http://localhost:3000/admin/me',
                method: 'get',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                setLoggedin(true)
                setUser(res.data.username)
            })
        } catch (err) {
            console.log(err)

        }
    }

    useEffect(() => {
        handleMe()
    }, [])

    if (loggedin) {
        return (
            <nav className="navbar">
                <div className="navbar-brand" style={{ cursor: 'pointer' }} onClick={() => { navigate('/admin') }}>
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
            <div className="navbar-brand" style={{ cursor: 'pointer' }} onClick={() => { navigate('/admin') }}>
                <img src={icon} alt="" />
                <Typography variant="body1">EDUFLEX</Typography>
            </div>
            <div className="navbar-buttons">
                <Button variant="contained" onClick={() => navigate('/admin/login')}>LOGIN</Button>
                <Button variant="contained" onClick={() => navigate('/admin/signup')}>SIGNUP</Button>
            </div>
        </nav>
    )
}

export default Navbar

