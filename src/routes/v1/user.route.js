const express = require('express')
const {userController} = require('../../controllers')
const { validate } = require('../../middlewares')
const { userValidation } = require('../../validations')
const router = express.Router()

router
.route("/signup")
.post(validate(userValidation.createUser),userController.createUser)

module.exports = router