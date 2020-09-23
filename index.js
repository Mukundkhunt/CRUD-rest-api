const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const path = require('path')
const personRoute = require('./routes/person')
const bodyParser = require('body-parser')
const customerRoute = require('./routes/customer')

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    
    next()
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

// 404 Handle Problem
app.use((req, res, next) =>{
    res.status(404).send('We Think, You are lost')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public','500.html'))   
    // 2) Method  res.sendFile(path.join(__dirname, '../public/500.html'))  
})

app.listen(PORT,()=>{console.info(`Server is Running on localhost:${PORT}`)})