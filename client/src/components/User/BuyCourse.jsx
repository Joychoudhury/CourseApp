import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const BuyCourse = () => {
    let { courseId } = useParams();
    const [course, setCourse] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/user/courses/${courseId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        }).then(res => setCourse(res.data.course))
    }, [])

    if (!course) {
        return <div style={{ height: "100vh", justifyContent: "center", flexDirection: "column" }}>
            Loading....
        </div>
    }
    return (<div>
        <GrayTopper title={course.title} />
        <Grid container>
            <Grid item lg={12} md={12} sm={12}>
                <CourseCard course={course} />
            </Grid>
        </Grid>
    </div>
    )
}
function GrayTopper({ title }) {
    return <div style={{ height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250 }}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div>
                <Typography style={{ color: "white", fontWeight: 600 }} variant="h3" textAlign={"center"}>
                    {title}
                </Typography>
            </div>
        </div>
    </div>
}

function CourseCard(props) {
    const navigate = useNavigate()
    const course = props.course;
    return <div style={{ display: "flex", marginTop: 200, justifyContent: "center", width: "100%" }}>
        <Card style={{
            margin: 10,
            width: 350,
            minHeight: 200,
            borderRadius: 20,
            marginRight: 50,
            paddingBottom: 15,
            zIndex: 2
        }}>
            <img src={course.imageLink} style={{ objectFit: 'fill', width: 350, height: 200, borderRadius: 20 }} ></img>
            <div style={{ marginLeft: 10 }}>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="subtitle1">
                    <b>₹ {course.price} </b>
                </Typography>
            </div>
            <div className="center">
                <Button variant="contained"
                    onClick={async () => {
                        axios.post("http://localhost:3000/user/courses/" + course._id, {}, {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("usertoken")
                            }
                        });
                        navigate('/courses')
                    }}
                > CONFIRM</Button>
            </div>
        </Card>
    </div>
}

export default BuyCourse