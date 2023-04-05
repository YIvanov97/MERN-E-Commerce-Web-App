const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image: {
        type: [String],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    memory: {
        type: Number,
        required: true
    },
    ram: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Products', productSchema)