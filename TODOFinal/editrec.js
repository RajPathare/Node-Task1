var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var choosee = require("./finalapp.js");

exports.editcust = function()
{
  const readline = require('readline').createInterface
  ({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Enter the id of the note to be edited, the title, the desc : `, (idd) =>
  {

    f = `${idd}`

    var a2 = f.split(',')

     editid = parseInt(a2[0]);
     edittitle = a2[1];
     editdesc = a2[2];

    readline.close();

    connectt4();

  })

}

function connectt4()
{

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { _id : editid };
    var newvalues = { $set: {name: edittitle, address: editdesc ,date : new Date().toLocaleString()} };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");

      choosee.choose();
    });
    db.close();
  });

}
