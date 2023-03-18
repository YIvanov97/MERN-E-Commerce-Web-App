const authModel = require('../../models/users/user.model')

async function httpUserRegister(req, res) {
    const user = req.body
    try {
        await authModel.userRegister(user)
        return res.status(201)
    } catch(err) {
        return res.status(401).json({error: err})
    }
}

async function httpUserLogin(req, res) {
    const user = req.body
    try {
        const response = await authModel.userLogin(user)
        res.cookie(process.env.COOKIE_KEY, response.token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        return res.status(302).json({success: true, user: response.user})
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

async function httpGetUser(req, res) {
    try {
        const user = await authModel.getUser(req.user)
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json({ user });
      } catch (error) {
        res.status(500).json({ error: error });
      }
}

module.exports = {
    httpUserRegister,
    httpUserLogin,
    httpUserUpdate,
    httpGetUser
}