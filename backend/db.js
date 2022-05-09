const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/iNotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log('Connect to mogo');
    })    
}
module.exports = connectToMongo;