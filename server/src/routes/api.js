const express = require('express')
const productRouter = require('./products/product.router')

const usersRouter = require('./users/user.router')

const api = express.Router()

api.use('/auth', usersRouter)
api.use('/products', productRouter)

module.exports = api;