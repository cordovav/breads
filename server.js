//dependeencies
//const { application } = require('express')
const express = require('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//middleware
//be as explicit as you can not implicit
//this is rendering the jsx files and telling the cpu where to find it and what to use to render
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.get('/', (req, res) =>{
    res.send('Welcome to an Awesome App about Breads!')
})

//breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//404 Page
app.get('*', (req,res) =>{
    res.send('404')
})

//listen
app.listen(PORT,() =>{
    console.log('listening on port',PORT);
})
