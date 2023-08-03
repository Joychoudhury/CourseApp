const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET = process.env.SECRET


const authenticateJwt = (req, res, next) => {
    const authtoken = req.headers.authorization

    if (authtoken) {
        const token = authtoken.split(" ")[1]

        jwt.verify(token, SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "User not Found" })
            }
            req.user = user
            next()
        })
    } else {
        res.status(401).json({ message: "Token not found" })
    }
}
module.exports = { authenticateJwt, SECRET }