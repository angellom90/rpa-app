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
