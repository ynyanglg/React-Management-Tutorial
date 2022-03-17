const express = require("express");
//const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ messgae: "Hello Express!!" });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

/*
var express = require("express");
var app = express();

app.listen(5000, function () {
  console.log("start! express server on port 3000");
});
*/
