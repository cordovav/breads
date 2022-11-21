//dependeencies
//const { application } = require('express')
const methodOverride = require('method-override')
const express = require('express')
const breads = require('./controllers/breads_controller.js')

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
    res.send('Welcome to an Awesome App about Breads!')
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

//404 Page
app.get('*', (req,res) =>{
    res.render('404')
})

//listen
app.listen(PORT,() =>{
    console.log('listening on port',PORT);
})
