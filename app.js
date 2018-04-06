var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});


var MongoDBStore = require('connect-mongodb-session')(session);
var ls = require('local-storage');

var store = new MongoDBStore(
      {
        uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
        databaseName: 'connect_mongodb_session_test',
        collection: 'mySessions'
      });

 // Catch errors
 // БЫЛА ТУТ ОШИБКА ПРИ СОЗДАНИИ

 store.on('error', function(error) {
       assert.ifError(error);
       assert.ok(false);
     });



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
  //store: store,
  saveUninitialized: true,

}))

app.get('/', function (req, res){

  console.log (req.session.id)
})


app.post ('/login', function (req, res) {

let body = req.body;
const username = body.username;
const password = body.password;

 if ((username && password) && req.method === 'POST') {
   if (username === 'admin' && password === 'admin') {

    let options = {
    maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    httpOnly: true // The cookie only accessible by the web server
    //signed: true // Indicates if the cookie should be signed
}

     let sessionId = req.session.id;

     res.cookie ('sessionId', sessionId.toString(), options)
      //ls.set ('id', cookiesId.toString())
      console.log (req.session.id)

      req.session.user = 'admin'

    store.set(sessionId, req.session, function (error) {
      if (error) {
        console.log (error)
      }
    })



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

  store.get(req.cookies.sessionId, function (error, session) {

      if (error) {
        console.log (error)
      } else {
        console.log ('session FROM STORAGE ')
          console.log ( session )

      }

  })

console.log ('куки и сессия РАВЕНСТВО'+(req.session.id ==req.cookies.sessionId))
console.log ('sessionId в куки '+req.cookies.sessionId)

       var obj = {name: 'admin', status: 'success', respond: 'message for admin only'}
if (req.session.user == 'admin' ){

  res.send (obj)
}

})

// (e)=>{console.log (e)}

       /*if (ls.get ('id') === req.cookies.id )
                  {res.send (obj)}*/




app.get ('/isLoggedIn', function (req,res){



})
