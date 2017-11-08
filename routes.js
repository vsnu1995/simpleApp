var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});
app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });

//export this router to use in our index.js
module.exports = router;