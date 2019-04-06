var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Database Setup
require('./db/connect') // connect mongoose to the database

var User = require('./db/models/User')
var Idea = require('./db/models/Idea')
var Vote = require('./db/models/Vote')


app.get('/', function(req,res){
    res.send('home page')
})

app.post('/signup', function(req, res){
    var newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    })
    newUser.save(function(error,user){
        if (error) {
            res.send('there was a problem')
        } else {
            res.redirect('/')
        }
    })
})

app.get('/login', function(req,res){
    res.send('login page')
})

// User.findOne({email: 'uma@gmail.com'}, function(error, user){
    
// })

app.get('/signup', function(req,res){
    res.sendFile(path.join(__dirname,'public','signup.html'))
})

app.listen(3000, function(){
    console.log("listening..")
})
