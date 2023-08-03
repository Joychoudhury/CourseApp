import { Button, Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const PurchasedCourse = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/user/purchasedCourses', {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        }).then(res => setCourses(res.data.purchasedCourses))
    }, [])
    console.log(courses)

    return (
        <div>
            <Navbar />
            <div className="" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {courses.map((e) => {
                    return <Course key={e._id} course={e} />
                })}
            </div>
        </div>
    )
}
export function Course({ course }) {
    const navigate = useNavigate();

    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{ height: 150, width: 300 }} ></img>
    </Card>

}
export default PurchasedCourse
