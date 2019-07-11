var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var kkk;

// var choosee = require("./finalapp.js");

exports.viewcust = function(callback)
{
   MongoClient.connect(url, function(err, db)
   {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("customers").find({}).toArray(function(err, result)
    {
      if (err) throw err;
      //console.log(result);

      kkk = result;
      db.close();
      //choosee.choose();
    })
    
  })

  callback(null,kkk);

}
