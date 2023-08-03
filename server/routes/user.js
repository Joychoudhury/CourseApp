const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { authenticateJwt } = require('../middleware/auth')
const { User, Course, Admin } = require('../db/index')
require('dotenv').config()

const SECRET = process.env.SECRET


const router = express.Router()

router.get('/me', authenticateJwt, async (req, res) => {
    const user = await User.findOne({ username: req.user.username })
    if (!user) {
        return res.status(401).json({ message: "User does not exist" })
    }
    res.json({ username: user.username })
})

router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (user) {
        return res.status(401).json({ message: "User already exist" })
    }
    const newUser = new User({ username, password })
    await newUser.save()
    var token = jwt.sign({ username: username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ username, token })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.headers
    const user = await User.findOne({ username, password })
    if (!user) {
        return res.status(401).json({ message: "Invalid username and password" })
    }
    var token = jwt.sign({ username: username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ username, token })
})

router.get('/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({ published: true })
    res.json({ courses })
})

router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    if (course) {
        const user = await User.findOne({ username: req.user.username })
        if (user) {
            user.purchasedCourses.push(course)
            await user.save()
            res.json({ message: 'Course purchased successfully' })
        } else {
            res.status(403).json({ message: "User not found" })
        }
    } else {
        res.status(404).json({ message: "Course not found" })
    }
})
router.get('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findById(req.params.courseId)
    res.json({ course })
})

router.get('/purchasedCourses', authenticateJwt, async (req, res) => {
    const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses')
    if (user) {
        res.json({ purchasedCourses: user.purchasedCourses })
    } else {
        res.status(403).json({ message: "User not found" })

    }
})


module.exports = router