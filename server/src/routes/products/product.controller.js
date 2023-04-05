const productsModel = require('../../models/products/product.model');

async function httpCreateProduct (req, res) {
    const product = req.body

    try {
        await productsModel.createProduct(product)
        return res.status(200)
    } catch (err) {
        return res.status(400).json({error: err})
    }
}

async function httpGetProducts (req, res) {
    const filters = req.query;
    
    try {
        const products = await productsModel.getProducts(filters)
        console.log(products)
        return res.json(products)
    } catch (err) {
        return res.status(400).json({error: err})
    }
}

module.exports = {
    httpCreateProduct,
    httpGetProducts
}