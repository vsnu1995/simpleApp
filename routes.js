var express = require('express');
var router = express.Router();
var path    = require("path");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');
var personSchema = mongoose.Schema({
    name: String
 });
 var Person = mongoose.model("Person", personSchema);
router.get('/', function(req, res){
    
//    res.sendFile(path.join(__dirname+'/public/html/index.html'));
//    res.sendFile(path.join(__dirname+'/public/css/index.css'));
});
// router.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id + typeof(parseInt(req.params.id)));
//  });
router.post('/', function(req, res){
    console.log('gooot post');
    // var newPerson = new Person(req);
    // newPerson.save(function(err, Person){
    //     if(err)
    //        res.render('show_message', {message: "Database error", type: "error"});
    //     else
    //        res.render('show_message', {
    //           message: "New person added", type: "success", person: req});
    //  });
    res.send(req);
});
 router.get('*', function(req, res){
    res.send('Wrong URL');
 });

//export this router to use in our index.js
module.exports = router;