var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var choosee = require("./finalapp.js");


exports.viewcust = function()
{
  connectt3();

}

function connectt3()
{
   MongoClient.connect(url, function(err, db)
   {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("customers").find({}).toArray(function(err, result)
    {
      if (err) throw err;
      console.log(result);

      db.close();
      choosee.choose();
    })
  })

}
