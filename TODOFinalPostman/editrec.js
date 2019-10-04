//File to Edit record in the Mongo database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//var choosee = require("./finalapp.js");


exports.editcust = function(arg1)
{

  f = parseInt(arg1._id);
  g = arg1.name;
  h = arg1.address;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { _id : f };
    var newvalues = { $set: {name: g, address: h ,date : new Date().toLocaleString()} };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");

      //choosee.choose();
    });
    db.close();
  });

}
