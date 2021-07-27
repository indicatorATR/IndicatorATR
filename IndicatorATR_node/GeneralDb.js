const {MongoClient} = require('mongodb');
const Binance = require('node-binance-api');


async function main(){

    const uri = "mongodb+srv://root:ATR12345@cluster0.thyws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



const binance = new Binance().options({
  APIKEY: 'weaXzsTzGI1hyycD0CrQuaeHjHgJCZqv6lLQHwxpyngT2Up3pOmJjQRB9VaQdFf7',
  APISECRET: 'CPfdPNLByKI3ZP11IJEatIabDstZhi4baUxSMmp5onNdveJv7q66HYAcyI3vjN4m'
});
