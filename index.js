var express = require('Express');
var app = express();

var things = require('./routes.js');

//both index.js and things.js should be in same directory
app.use('/', things);

app.listen(3000);