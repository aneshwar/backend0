
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/newsb", {useNewUrlParser:true});

const studentSchema = new mongoose.Schema({
    name: String,
   age: Number,
   subject: String,
})
const Student = new mongoose.model('photos', studentSchema);

app.get('/', (req,res) => {
    Student.find({}, (err, docs)=> {
       res.json(docs)
   })

})



app.listen(port, () => {
    console.log(`concted:${port}`)
})