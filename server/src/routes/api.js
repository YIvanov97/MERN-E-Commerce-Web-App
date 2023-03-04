const express = require('express')

const usersRouter = require('./users/user.router')

const api = express.Router()

api.use('/auth', usersRouter)

module.exports = api;