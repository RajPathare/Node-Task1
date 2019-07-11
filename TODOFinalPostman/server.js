var express = require('express');
const serv = express();
var show = require('./viewrec.js');
var addd = require('./addrec.js');
var bodyparserr = require('body-parser');
var dell = require('./delrec.js');
var editt = require('./editrec.js');

serv.use(bodyparserr.urlencoded({extended: 'false'}));
serv.use(bodyparserr.json());

serv.get('/show',(req,res)=>
{
    var kk;
    //show.showd(function(err,res){kk = res});
    show.viewcust(function(err,res)
    {
        kk = res;
    });
    res.send(kk);
});

serv.post('/postt',(req,res)=>
{
    console.log(req.body);
    addd.addcust(req.body);
    //res.send("W");

});

serv.delete('/del',(req,res)=>
{
    console.log(req.body);
    dell.delcust(req.body);


});

serv.put('/editt',(req,res)=>
{
    console.log(req.body);
    editt.editcust(req.body);

});

serv.listen(8080,()=>console.log('Server List'));