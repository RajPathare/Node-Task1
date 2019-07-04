
// assigning variables
var td,c,d,e,editid,edittitle,editdesc,al,ot,rl,hmm1,hmm;

choose();

function choose()
{


  const readline = require('readline').createInterface
  ({
    input: process.stdin,
    output: process.stdout
  })

  console.log("Management system - 1.Add , 2.Delete , 3.View , 4.Edit , 5.Exit");
  readline.question(``, (options) =>

  {

  var a1 = `${options}`;

  readline.close();
  switch (a1)
  {
    case '1': addcust();
    break;
    case '2': delcust();
    break;
    case '3': viewcust();
    break;
    case '4': editcust();
    break;
    case '5': break;
    default: console.log("Invalid option");
    break;
  }
})
}

  function addcust()
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

  } // addcust function closed


 function delcust()
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

 function viewcust()
 {
   connectt3();

 }

 function editcust()
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

      editid = a2[0];
      edittitle = a2[1];
      editdesc = a2[2];

     readline.close();

     connectt4();

   })




 }

// intialization of client

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function connectt1()
{
  MongoClient.connect(url, function(err, db)

  {

    if (err) throw err;

    var dbo = db.db("mydb");

    dbo.collection("customers").find({}).toArray(function(err, result)
    {

       if (err) throw err;
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

     choose();

    })

  }

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
      choose();

    })
  })
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
      //console.log(result[result.length-1]._id);

      //getidcount();
      db.close();
      choose();
    })
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
      db.close();
      choose();
    });
  });

}
