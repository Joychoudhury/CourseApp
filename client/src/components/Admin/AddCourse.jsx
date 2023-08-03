import { Button, Card, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0)
    return <div style={{ display: "flex", minHeight: "80vh", justifyContent: "center", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card varint={"outlined"} style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}>
                <TextField
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />

                <TextField
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />

                <TextField
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                />

                <TextField
                    style={{ marginBottom: 10 }}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    fullWidth={true}
                    label="Price"
                    variant="outlined"
                />

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        await axios.post("http://localhost:3000/admin/courses", {
                            title: title,
                            description: description,
                            imageLink: image,
                            published: true,
                            price
                        }, {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        navigate('/admin/courses')
                    }}
                > Add course</Button>
            </Card>
        </div>
    </div>
}

export default AddCourse