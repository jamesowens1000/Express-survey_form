var express = require("express");

var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("index");
})

app.post("/result", function(req, res) {
    res.render("result", {survey_info: {name: req.body.name, location: req.body.location, language: req.body.language, comment: req.body.comment}});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})