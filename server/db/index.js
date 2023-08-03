const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    purchasedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
})
const adminSchema = new Schema({
    username: String,
    password: String
})
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
})

const User = mongoose.model('User', userSchema)
const Admin = mongoose.model('Admin', adminSchema)
const Course = mongoose.model('Course', courseSchema)

module.exports = { User, Admin, Course }