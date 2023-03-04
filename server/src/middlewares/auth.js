const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.cookies.cookiekey
    
    if(!token) {
        res.clearCookie(process.env.COOKIE_NAME)
        return res.status(401).json('No token found!')
    }

    jwt.verify(token, process.env.CLIENT_SECRET, (err, decoded) => {
        if (err) {
            res.clearCookie(process.env.COOKIE_NAME)
            return res.status(403).json('Invalid token!')
        } else {
            req.user = decoded;
        }
    })

    next();
}