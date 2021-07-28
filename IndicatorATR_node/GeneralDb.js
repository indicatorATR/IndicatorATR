const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ATR_Indicator";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ATR_Indicator");
  dbo.createCollection("pair_coin", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});