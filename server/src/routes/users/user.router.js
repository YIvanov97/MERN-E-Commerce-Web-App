const express = require('express')
const { httpUserRegister, httpUserLogin, httpUserUpdate, httpGetUser } = require('./user.controller')
const isAuthenticated = require('../../middlewares/auth')

const usersRouter = express.Router()

usersRouter.post('/register', httpUserRegister)
usersRouter.post('/login', httpUserLogin)
usersRouter.post('/update', httpUserUpdate)
usersRouter.get('/user', isAuthenticated, httpGetUser)
usersRouter.get('/logout', (req, res) => {
    res.clearCookie(process.env.COOKIE_KEY);
    return res.redirect('/');
})

module.exports = usersRouter;