const express = require("express");
const cors = require("cors");
const users = require("./users.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Express User Management server");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(res.body);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
