const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 8000;
var dbURI = "mongodb+srv://ATR_Indicator:ATR123456789@indicatoratr.b0reg.mongodb.net/Indicator_ATR?retryWrites=true&w=majority";

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 
