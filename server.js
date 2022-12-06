//dependeencies
//const { application } = require('express')
const methodOverride = require('method-override')
const express = require('express')
const breads = require('./controllers/breads_controller.js')
const mongoose = require('mongoose')


//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//middleware
//be as explicit as you can not implicit
//this is rendering the jsx files and telling the cpu where to find it and what to use to render
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.get('/', (req, res) =>{
    //res.send('Welcome to an Awesome App about Breads!')
    res.render('home')
})

//delete
breads.delete('/:indexArray', (req, res) => {
    bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
})
//breads
const breadsController = require('./controllers/breads_controller.js')
const bread = require('./models/bread.js')
app.use('/breads', breadsController)

//bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

//404 Page
app.get('*', (req,res) =>{
    res.render('404')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    ()=> {console.log('connected to mongo', process.env.MONGO_URI)})
    
//listen
app.listen(PORT,() =>{
    console.log('listening on port',PORT);
})
