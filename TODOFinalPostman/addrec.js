var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var c,d;

exports.addcust = function(arg)
{
  MongoClient.connect(url, function(err, db)

  {

    if (err) throw err;

    var dbo = db.db("mydb");

    dbo.collection("customers").find({}).toArray(function(err, result)
    {

       if (err) throw err;
       //console.log(result);
       hmm = (result[result.length-1]._id);
       hmm++;

       c = arg.name;
       d = arg.address;
     
       olol();

    })

    function olol()

    {

    var myobj = {_id: hmm, name: c , address: d, date : new Date().toLocaleString()};
   // console.log(myobj)
    dbo.collection("customers").insertOne(myobj, function(err, res)
     {
      if (err) throw err;
      console.log("1 note inserted");
     db.close();
    })

  }

  })
}
