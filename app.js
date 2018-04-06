var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');
var ls = require('local-storage');
// DELETE var jsonfile = require('jsonfile')
var cookie = require('cookie'); // what cookies are actuallu works here

var cookieParser = require('cookie-parser');

//let crypto = require('crypto'); DELETE

//var Storage = require('session-storage').create ('file', {where:'./sess_storage.json',secureKey:'secureKey'})


var Rx = require('rxjs/Rx');
var faker = require('faker');

app.listen(3000, ()=>console.log('listen on 3000'));

//console.log (faker.name.findName());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser())



app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,

}))



app.post ('/login', function (req, res) {

let body = req.body;
const username = body.username;
const password = body.password;

 if ((username && password) && req.method === 'POST') {
   if (username === 'admin' && password === 'admin') {

     let cookiesId = req.cookies['connect.sid'];

      res.cookie ('id', cookiesId.toString())
      ls.set ('id', cookiesId.toString())


     res.send ({
     'success': true,
     'mesg':'admin zone'
     })
     } else  {
       res.send ({
         'success': false,
         'mesg':'invalied data for admin'
         })
     }
 } else {
   res.send ({
     'success': false,
     'mesg':'only POST or empty data'
     })
 }
})


app.get ('/database',function  (req, res) {


       var obj = {name: 'admin', status: 'success', respond: 'message for admin only'}
       console.log (req.cookies['connect.sid'])
       console.log (req.cookies.id)
      console.log (req.cookies['connect.sid'] == req.cookies.id)

       if (ls.get ('id') === req.cookies.id )
                  {res.send (obj)}


})
