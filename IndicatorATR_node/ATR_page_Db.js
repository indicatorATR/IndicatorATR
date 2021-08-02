var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


let CoinPair = async()=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var DataBase = db.db("ATR_Indicator");
        DataBase.collection("pair_coin").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}


let TimeFrames = async()=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var DataBase = db.db("ATR_Indicator");
        DataBase.collection("timeframes").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

let Content = async () => {
    return JSON.parse('{"CoinPair":'+ CoinPair()+',"TimeFrames":' + TimeFrames()+"}")
  }
  
  
  module.exports.ATRPageJson= async (req) =>{
      return ({
          "Content":await Content()  
  })}