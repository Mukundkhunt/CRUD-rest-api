const express = require('express')
const route = express.Router()
const userPost = require('../controller/user.post')
const userPut = require('../controller/user.put')
const userGet = require('../controller/user.get')
const userDelete = require('../controller/user.delete')


route.post('/', userPost)
route.get('/', userGet)
route.put('/', userPut)
route.delete('/', userDelete)

module.exports = route