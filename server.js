const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 6969;

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

// Database

let reserved = [
  {
    name: "Name",
    phone: 1234567890,
    email: "name@hotmail.com",
    id: 1
  }
];

let waiting = [
  {
    name: "Main",
    phone: 0987654321,
    email: "Main@yahoo.com",
    id: 9
  }
];


// Routing

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api", (req, res) => {
  res.json(reserved);
});

app.get("/api/reserve", (req, res) => {
  res.json(reserved);
});

app.get("/api/waiting", (req, res) => {
  res.json(waiting);
});

app.post("/api/reserve", (req, res) => {
  const newTable = req.body;

  console.log(newTable);

  if (reserved.length <= 4) {
    reserved.push(newTable);
    res.send("reserved");
  }else if (reserved.length >= 4) {
    waiting.push(newTable);
    res.send("waiting");
  };
});





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
