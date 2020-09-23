const CustomerModel = require('../models/customer.model')
const express = require('express')
const router = require('./person')
const route = express.Router()

// Create new Customer
router.post('/customer', (req, res) => {
    if(!req.body){
        return res.status(400).send('request body is missing')
    }
    // let user = {
    //     name : 'firstname lastname',
    //     email : 'email@gmail.com'
    // }
    let model = new CustomerModel(req.body)
    model.save()
    .then(doc => {
        if(!doc || doc.length === 0)
        {
            return res.status(500).send(doc)
        }
        res.send(201)
     })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Select Customer Information
router.get('/customer', (req,res) => {
    if(!req.query.email){
        return res.status(400).send("Misssing URL parameter : email")
    }
    CustomerModel.findOne({email: req.query.email})
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Update the information
router.put('/customer', (req, res) => {
    if(!req.query.email){
        return res.status(400).send("Misssing URL parameter : email")
    }
    CustomerModel.findOneAndUpdate({email: req.query.email}, req.body, {new : true})
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Delete Record information
router.delete('/customer' , (req,res) => {
    if(!req.query.email){
        return res.status(400).send("Misssing URL parameter : email")
    }
    CustomerModel.findOneAndRemove({email: req.query.email})
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router