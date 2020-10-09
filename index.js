const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const userRoute = require('./routes/user.route')
app.use(BodyParser.json(), BodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)

    next()
})
app.use('/user', userRoute)
app.listen(port = process.env.PORT || 5000, () => {
    console.log(`Server is running on port :-> ${port}`)
})