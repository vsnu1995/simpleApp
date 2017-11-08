var express = require('express');
var router = express.Router();
var path    = require("path");

router.get('/', function(req, res){
//    res.sendFile(path.join(__dirname+'/public/html/index.html'));
//    res.sendFile(path.join(__dirname+'/public/css/index.css'));
});
// router.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id + typeof(parseInt(req.params.id)));
//  });
 router.get('*', function(req, res){
    res.send('Wrong URL');
 });

//export this router to use in our index.js
module.exports = router;