const mongoose = require('mongoose');
//const db_url = require('../secret');
const db_url = "mongodb+srv://admin:developers433@cluster0.cdgm0tn.mongodb.net/?retryWrites=true&w=majority"


require('dotenv').config();
module.exports = db_url;
mongoose.connect(db_url, ()=> {
  console.log('connected to mongodb')
})

