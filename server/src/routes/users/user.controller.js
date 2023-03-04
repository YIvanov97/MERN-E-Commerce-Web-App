const authModel = require('../../models/users/user.model')

async function httpUserRegister(req, res) {
    const user = req.body
    try {
        await authModel.userRegister(user)
        return res.status(201).json(user)
    } catch(err) {
        return res.status(401).json({error: err})
    }
}

async function httpUserLogin(req, res) {
    const user = req.body
    try {
        const token = await authModel.userLogin(user)
        res.cookie(process.env.COOKIE_KEY, token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        return res.status(200).json(user)
    } catch(err) {
        return res.status(401).json({error: err})
    }
}

async function httpUserUpdate(req, res) {
    const user = req.body
    try {
        const updatedUser = await authModel.userUpdate(user)
        return res.status(200).json(updatedUser)
    } catch(err) {
        return res.status(400).json({error: err})
    }
}

module.exports = {
    httpUserRegister,
    httpUserLogin,
    httpUserUpdate
}