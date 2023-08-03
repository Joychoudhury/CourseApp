import { Button } from '@mui/material'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { adminloggedinState } from '../Atom'

const Landing = () => {

    const adminLoggedin = useRecoilValue(adminloggedinState)
    const navigate = useNavigate()
    if (adminLoggedin === false) {
        return <><Navbar/></>; 
    }

    return (
        <div className="">
            <Navbar />
            {
                adminLoggedin &&
                <div className='center' style={{ flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
                    <Button size='large' variant="outlined" onClick={() => navigate('/admin/courses')}>GET COURSES</Button>
                    <Button size='large' variant="outlined" onClick={() => navigate('/admin/addCourse')}>CREATE COURSE</Button>
                </div>
            }
        </div>
    )
}

export default Landing