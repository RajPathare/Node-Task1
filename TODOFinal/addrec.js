var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var choosee = require("./finalapp.js");

exports.addcust = function()
{


    const readline = require('readline').createInterface
    ({
      input: process.stdin,
      output: process.stdout
    })

    readline.question(`title and desc: `, (td) =>
    {


      var b = `${td}`; // taking

      var arr = b.split(',');

      c = arr[0]; // taking title
      d = arr[1]; // taking description

      readline.close()
      // calling connect fucntion to store in databse
      connectt1();


    })

}



function connectt1()
{
  MongoClient.connect(url, function(err, db)

  {

    if (err) throw err;

    var dbo = db.db("mydb");

    dbo.collection("customers").find({}).toArray(function(err, result)
    {

       if (err) throw err;
       console.log(result);
       hmm = (result[result.length-1]._id);
       hmm++;

       olol();

       //console.log(al+1);
    })

    function olol()

    {

    var myobj = {_id: hmm, name: c , address: d, date : new Date().toLocaleString()};
    console.log(myobj)
    dbo.collection("customers").insertOne(myobj, function(err, res)
     {
      if (err) throw err;
      console.log("1 note inserted");
     db.close();

     choosee.choose();

    })

  }

  })
}
