const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const usersCollection = require('./user.mongo')

const userRegister = async (user) => {
    const isUserExist = usersCollection.findOne({email: user.email})
    
    if(isUserExist) {
        return;
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hashSync(user.password, salt)
    
    // await usersCollection.updateOne({
    //     firstname: user.firstname,
    //     lastname: user.lastname,
    //     username: user.username,
    //     email: user.email,
    //     password: hashedPassword
    // }, user, {
    //     upsert: true
    // })

    const newUser = new usersCollection({
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        password: hashedPassword
    })

    await newUser.save()
}

const userLogin = async (user) => {
    const loggingUser = await usersCollection.findOne({email: user.email})
    
    if(!loggingUser) {
        return;
    }
    
    const isPasswordCorrect = await bcrypt.compare(user.password, loggingUser.password)
    
    if(isPasswordCorrect) {
        return jwt.sign({id: loggingUser._id}, process.env.CLIENT_SECRET, {expiresIn: '10m'})
    }
}

const userUpdate = async (user) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hashSync(user.password, salt)

    const updateUser = await usersCollection.findOneAndUpdate(
        {email: user.email}, 
        {
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            password: hashedPassword
        }, 
        {returnOriginal: false}
    )

    return updateUser;
}

module.exports = {
    userRegister,
    userLogin,
    userUpdate
}