const express = require('express')
const router = express.Router()

router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`1) (Method) You have requested a person name ${req.query.name}`)
    }
    else{
        res.send('You have requested a person')
    }
})

router.get('/person/:name', (req, res) => {
    res.send(`2) (Method) You have requested a person name is ${req.params.name}`)
})

router.get('/person/error',(req, res) => {
    throw new Error('This is a forced error.')
})


module.exports = router