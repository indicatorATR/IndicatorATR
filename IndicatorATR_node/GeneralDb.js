const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ATR_Indicator";


module.exports.MongFunc = async(symbols)=>{
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var DataBase = db.db("ATR_Indicator");
    DataBase.collection("pair_coin").insertMany(symbols, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
       });
  });
}



