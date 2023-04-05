const productsColection = require('./product.mongo')

const createProduct = async (product) => {
    await productsColection.updateOne({
        image: product.image,
        title: product.title,
        description: product.description,
        quantity: product.quantity
    }, product, {
        upsert: true
    })
}

const getProducts = async (query = {}) => {
    if(!Object.entries(query).length) {
        return await productsColection.find({}, {'__v': 0})
    }

    const {title, type, brand, memory, ram, color} = query;
    return await productsColection.find({
        $or: [
            {title: {$in: title, $ne: null, $ne: '' }},
            {type: {$in: type, $ne: null, $ne: '' }},
            {brand: {$in: brand, $ne: null, $ne: '' }},
            {memory: {$in: memory, $ne: null, $ne: '' }},
            {ram: {$in: ram, $ne: null, $ne: '' }},
            {color: {$in: color, $ne: null, $ne: '' }}
        ], '__v': 0})
}

module.exports = {
    createProduct,
    getProducts
}