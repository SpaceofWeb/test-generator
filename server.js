const express = require('express');
const mysql = require('mysql');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res){
    res.sendfile(__dirname + '/dist/index.html');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});