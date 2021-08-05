var express = require('express');
var app = express();
var port = 8000;
var Binance = require('node-binance-api');
var GeneralDb = require('./GeneralDb.js');

var binance= new Binance().options({
  APIKEY:  'weaXzsTzGI1hyycD0CrQuaeHjHgJCZqv6lLQHwxpyngT2Up3pOmJjQRB9VaQdFf7jhfaynzx',
  APISECRET: 'CPfdPNLByKI3ZP11IJEatIabDstZhi4baUxSMmp5onNdveJv7q66HYAcyI3vjN4m'
});

async function CoinFunc(){
  await binance.bookTickers((error, ticker) => {
  let coins=ticker;
  for (let i = 0; i < 100; i++) {
    let Symbol = JSON.parse('[{"symbol":' + JSON.stringify(coins[i]["symbol"]) + '}]');
    GeneralDb.MongFunc(Symbol)
    } 
  });
}

CoinFunc()

app.get('/AtrPage', GeneralDb.ATRPage)
// app.post('/register_page',registerForm.RegisterFormHandler)


async function CandleStick(coin,time){
  await binance.candlesticks(coin, time, (error, ticks, symbol) => {
  console.info("candlesticks()", ticks);
  let last_tick = ticks[ticks.length - 1];
  let [time, open, high, low, close, closeTime, ignored] = last_tick;
  console.info(symbol+" last close: "+close);
  }, {limit: 500, endTime: 1514764800000});
}



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 
