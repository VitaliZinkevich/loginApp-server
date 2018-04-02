var express = require('express');
var app = express();


var faker = require('faker');

var express = require('express');
var app = express();

var Rx = require('rxjs/Rx');

var bodyParser = require('body-parser');

app.listen(3000, ()=>console.log('listen on 3000'));

//console.log (faker.name.findName());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post ('/login', function (req, res) {
  
  let body = req.body;
  
  const username = body.username
  const password = body.password
  
  /*console.log (body.username);
  console.log (body.password);*/
  




if ((username && password) && req.method === 'POST') {

  if (username === 'admin' && password === 'admin') {
    
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



/*
  res.json( Rx.Observable.of ({
    'randomName':faker.name.findName(),
    'randomEmail':faker.internet.email(),
    'randomCard': faker.helpers.createCard()
    }));
  console.log(res.headersSent); // true
});*/

/*
app.get('/', function(req, res){
  res.send('hello world');
});
*/

})