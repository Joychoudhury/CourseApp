const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { authenticateJwt } = require('../middleware/auth')
const { User, Course, Admin } = require('../db/index')

require('dotenv').config()

const SECRET = process.env.SECRET
const router = express.Router()

router.get('/me', authenticateJwt, async (req, res) => {
    const admin = await Admin.findOne({ username: req.user.username })
    if (!admin) {
        return res.status(401).json({ message: "Admin does not exist" })
    }
    res.json({ username: admin.username })
})

router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username })
    if (admin) {
        return res.status(401).json({ message: "Admin already exist" })
    }
    const newAdmin = new Admin({ username, password })
    await newAdmin.save()
    var token = jwt.sign({ username: username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    res.json({ username, token })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.headers
    const admin = await Admin.findOne({ username, password })
    if (!admin) {
        return res.status(401).json({ message: "Invalid username and password" })
    }
    var token = jwt.sign({ username: username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    res.json({ username, token })
})

router.post('/courses', authenticateJwt, async (req, res) => {
    const course = new Course(req.body);
    await course.save()
    res.json({ message: "Course created successfully", courseId: course.id })
})

router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true })
    if (course) {
        res.json({ message: "Course Updated successfully" })
    } else {
        res.status(404).json({ message: "Course not found" })
    }
})

router.get('/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({})
    res.json({ courses })
})

router.get('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findById(req.params.courseId)
    res.json({ course })
})


module.exports = router