const express = require('express')
const { httpCreateProduct, httpGetProducts } = require('./product.controller')

const productRouter = express.Router()

productRouter.post('/create', httpCreateProduct)
productRouter.get('/get', httpGetProducts)

module.exports = productRouter;