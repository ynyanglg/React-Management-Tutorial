const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj.count);
// expected output: 42
console.log(obj.result);
// expected output: true

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();

/*
app.get("/api/hello", (req, res) => {
  res.send({ messgae: "Hello Express!!" });
});
*/
app.get("/api/customers", (req, res) => {
  /*
  res.send([
    
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동11",
      birthday: "961211",
      gender: "남성",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "홍길동12",
      birthday: "961212",
      gender: "남성",
      job: "포토그래퍼",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "홍길동13",
      birthday: "961213",
      gender: "여성",
      job: "디자이너",
    },
    
  ]);
  */
  connection.query("SELECT * FROM CUSTOMER", (err, rows, feilds) => {
    res.send(rows);
  });
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
