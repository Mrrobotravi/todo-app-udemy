const express = require("express");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mongoose");
const todoRoute = require("./routes/todo")
const dotenv = require("dotenv")


dotenv.config()

//init app
const app = express();

connectMongodb();




//view engine 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use("/" ,todoRoute);

module.exports = app;

