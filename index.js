var express = require('Express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

app.use(express.static('public'));

var things = require('./routes.js');

//both index.js and things.js should be in same directory
app.use('/', things);

app.listen(3000);   

// var express = require('express');
// var app = express();
// var num = 0;
// //First middleware before response is sent
// app.use('/things',function(req, res, next){
//    console.log("Started at" + num++);
//    next();
// });

// //Route handler
// app.get('/things', function(req, res, next){
//    res.send("Middle at "+ num++);
//    next();
// });

// app.use('/things', function(req, res){
//    console.log("Ended at" + num);
//    num=0;
// });

// app.listen(3000);