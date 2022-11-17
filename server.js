//dependeencies
const { application } = require('express')
const express = require('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//routes
app.get('/', (req, res) =>{
    res.send('Welcome to an Awesome App about Breads!')
})

//breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//listen
app.listen(PORT,() =>{
    console.log('listening on port',PORT);
})
