var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var choosee = require("./finalapp.js");

exports.delcust = function()
{

  const readline = require('readline').createInterface
  ({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Enter the id of note which is to be deleted: `, (note_id) =>
  {

    e = `${note_id}`
    e++;
    e--;

    readline.close();
    connectt2();

  })

}

function connectt2()
{
  MongoClient.connect(url, function(err, db)

  {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { _id : e };
    dbo.collection("customers").deleteOne(myquery, function(err, obj)
    {
      if (err) throw err;// function connectt4()

      console.log("1 note deleted");
      db.close();
      choosee.choose();

    })
  })
}
