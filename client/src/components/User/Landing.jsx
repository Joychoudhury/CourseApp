import { Button } from '@mui/material'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import  userloggedinState  from '../Atom'

const Landing = () => {

    const adminLoggedin = useRecoilValue(userloggedinState)
    const navigate = useNavigate()
    if (adminLoggedin === false) {
        return <><Navbar /></>;
    }


    return (
        <div className="">
            <Navbar />
            {
                adminLoggedin &&
                <div className='center' style={{ flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
                    <Button size='large' variant="outlined" onClick={() => navigate('/Courses')}>All COURSES</Button>
                    <Button size='large' variant="outlined" onClick={() => navigate('/purchasedCourses')}>Purchased Courses</Button>
                </div>
            }
        </div>
    )
}

export default Landing