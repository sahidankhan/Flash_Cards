const Router = require('express').Router()
const controller = require('../controller/authController')
const middleware = require('../middleware')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)

module.exports = Router
