const express = require('express')
const cors = require('cors')
const path = require('path')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')

const api = require('./routes/api')

const app = express()

app.use(helmet())

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(cookieParser())

app.use(express.json())

app.use('/v1', api)

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
// })

module.exports = app;