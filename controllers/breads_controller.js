const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//index
breads.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render('index',{
                breads: foundBreads,
                title: 'Index Page'
        })   
    })
})

//new
breads.get('/new', (req, res) => {
    res.render('new')
})

//show
breads.get('/:id', (req,res) =>{
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            })
        })
        .catch(err => {
            res.send('404')
        })
})

//cratea
breads.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.image){
        req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
})

//update
breads.put('/:id', (req,res) =>{
    if (req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBread => {
        console.log(updatedBread)
        res.redirect(`/breads/${req.params.id}`)
    })
})

//edit
breads.get('/:id/edit', (req,res) =>{
    Bread.findById(req.params.id)
    .then(foundBread => {
        res.render('edit', {
            bread: foundBread,
        })
    })
    
})

breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
    .then(deleteBreads =>{
        res.status(303).redirect('/breads')
    })
})

module.exports = breads