
// assigning variables
var td,c,d,e,editid,edittitle,editdesc,al,ot,rl,hmm1,hmm;

var addrecc = require("./addrec.js");
var delrecc = require("./delrec.js");
var viewrecc = require("./viewrec.js");
var editrecc = require("./editrec.js");


var choosee = exports.choose = function()
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
    case '1': addrecc.addcust();
    break;
    case '2': delrecc.delcust();
    break;
    case '3': viewrecc.viewcust();
    break;
    case '4': editrecc.editcust();
    break;
    case '5': break;
    default: console.log("Invalid option");
    break;
  }
})
}

choosee();
