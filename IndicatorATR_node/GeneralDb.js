var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ATR_Indicator";


module.exports.MongFunc = (symbols)=>{
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ATR_Indicator");
  // dbo.collection("pair_coin").insertMany(symbols, function(err, res) {
  //   if (err) throw err;
  //   console.log("Number of documents inserted: " + res.insertedCount);
  //   db.close();
  //   });
  });
}

let CoinPair = async()=>{
  let CoinData=[];
  const client = await MongoClient.connect(url);
  const dbo = client.db("ATR_Indicator");
  const result = await dbo.collection("pair_coin").find().toArray();
  client.close();
  CoinData = JSON.parse(JSON.stringify(result));
  console.log(CoinData);
  return (await CoinData)
}

let TimeFrames = async()=>{
  let TimeData=[];
  const client = await MongoClient.connect(url);
  const dbo = client.db("ATR_Indicator");
  const result = await dbo.collection("timeframes").find().toArray();
  client.close();
  TimeData = JSON.parse(JSON.stringify(result));
  console.log(TimeData);
  return (await TimeData)
}


module.exports.ATRPage = async (req,res) =>{
  res.json(JSON.parse('{"CoinPair":'+JSON.stringify(await CoinPair())+
  ',"TimeFrames":'+JSON.stringify(await TimeFrames())+'}'))
}