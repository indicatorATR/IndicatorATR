
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

let CoinPair = async ()=>{
  let CoinData=[];
  MongoClient.connect(url,function(err, db) {
    if (err) throw err;
    var dbo =  db.db("ATR_Indicator");
    dbo.collection("pair_coin").find({}).toArray(function(err, result) {
      if (err) throw err;
      db.close();
      CoinData = JSON.parse(JSON.stringify(result))
      console.log(CoinData)
      return CoinData
    });
  });
  return CoinData
}


let TimeFrames = async()=> {
  let TimeData=[];
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ATR_Indicator");
    dbo.collection("timeframes").find({}).toArray(function(err, result) {
      if (err) throw err;
        // console.log(result);
      db.close();
      TimeData= result;
      console.log(JSON.parse(JSON.stringify(TimeData)))
    });
  });
  return TimeData
}
// console.log("hi" , CoinPair().coin)
//let Content = async () => {
 // console.log(TimeFrames())
 // return  JSON.parse('{"CoinPair":'+ JSON.stringify(await CoinPair())+
      //    ',"TimeFrames:"'+  JSON.stringify(await TimeFrames())+'}')
//}

//module.exports.ATRPage = async (req,res) =>{
  //res.json( await Content())
//}


// تجربة

module.exports.ATRPage = async (req,res) =>{
  return  JSON.parse('{"CoinPair":'+ JSON.stringify(await CoinPair().CoinData)+
    ',"TimeFrames:"'+  JSON.stringify(await TimeFrames().TimeData)+'}')
}




