const express = require('express')
const userRoutes = require('./user.route')

const router = express.Router()

const defaultRoutes = [
    {
        path: '/user',
        routes: userRoutes
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path,route.routes)
})

module.exports = router