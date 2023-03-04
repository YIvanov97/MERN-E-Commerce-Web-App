const https = require('https');
const fs = require('fs');

require('dotenv').config()

const app = require('./app');

const { mongoConnect } = require('./services/mongo');

const PORT = process.env.PORT;

const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);

async function startServer() {
    await mongoConnect()
}

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

startServer()