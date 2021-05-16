const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config();
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))
const port = process.env.PORT || 3000
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  
app.get('/', function(req, res){
    res.render('index')
})
  
app.listen(port, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})