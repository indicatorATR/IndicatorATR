var express = require('express')
var ATRDb = require("./ATR_Page_db.js")

// define the ATR page route

module.exports.ATRPage = async (req,res)=>{
      res.json(await ATRDb.ATRPageJson(req))
    }
