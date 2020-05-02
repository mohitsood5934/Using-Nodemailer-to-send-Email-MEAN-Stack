//import libraries 
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");

// import custom modules 
var routes = require("./routes/emailRoute");
var config = require("./config");


//creating  a new express application and configuring it 
var app = express();

//middlewares used 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//creating a log file 
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'LogFile.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

app.use(cors());

//configure routes
app.use(config.API_PATH,routes)

//listening to port 
app.listen(config.PORT,function(req,res){
  console.log("You are listening to port",config.PORT)

})
 