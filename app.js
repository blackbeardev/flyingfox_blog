var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var Post = require("./models/post");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/flyingfoxblog");

//Routes:
app.get("/", function(req, res) {
    res.redirect("/posts");
});

app.get("/posts", function(req, res) {
    res.render("index");
});




app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started..");
});