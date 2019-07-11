var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var e;


exports.delcust = function(argg)
{
  MongoClient.connect(url, function(err, db)

  {
    if (err) throw err;
    var dbo = db.db("mydb");

    e = parseInt(argg._id);

    var myquery = { _id : e };
    dbo.collection("customers").deleteOne(myquery, function(err, obj)
    {
      if (err) throw err;// function connectt4()

      console.log("1 note deleted");
      db.close();
      //choosee.choose();

    })
  })
}
