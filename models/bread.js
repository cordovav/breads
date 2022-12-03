
const mongoose = require('mongoose')

//creating shorthanf for the schema constructor
const { Schema } = mongoose


//creating schema
const breadSchema = new Schema ({
    //we will write our schema here
    name: { type: String, required: true },
    hasGluten: { Boolean },
    image: { type: String, default: 'http://placehold.it/500x500.png' }
})

//creating bread model
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread

