const AppResponse = require('../utils/AppResponse')

const createUser = async(req,res,next) => {
    const user = null
    const response = {
        message: "User signed up successfully."
    }

    next(new AppResponse({...response}))
}

module.exports = {
    createUser
}