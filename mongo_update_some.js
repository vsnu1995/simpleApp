var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: "Valley 345" };
  var newvalues = {$set: {address: "Canyon 123"} }; //if $set is not given other fields will be updated to null value
  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
