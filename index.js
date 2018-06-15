const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;
var db;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_j355fwgk:c2d9dked7ev4rt57j1e4j363n4@ds259620.mlab.com:59620/heroku_j355fwgk";

mongodb.MongoClient.connect(MONGODB_URI, function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");
});
  
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => {res.render('pages/index'), console.log("Refresh called")})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

/* 
mongodb()
  .MongoClient.connect(MONGODB_URI, (err, client) => {db = client.db(),console.log("Database connection ready")});
  
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

var express = require('express')
var app = express()
var initialText = "RPA Processes' Feasibility & Prioritization App! - Coming Soon. \n A Node.js app using Express, MongoDB, SocketIO, CircleCI, Heroku, Git and more."

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(initialText)
  console.log("Refresh called")
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
  
  console.log("Refresh called") 
  button.addEventListener('click', () => {
        console.log('CLICK');
        this.handleClick(); // lexical `this`
    });
}) 
var app = express()
app.get('/times', (req, res) => {
  let result = ''
  const times = process.env.TIMES || 5
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  res.send(result)
})
*/