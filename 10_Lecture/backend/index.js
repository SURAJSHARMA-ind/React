const express = require("express");
const cors = require("cors");
const hostname = "localhost";
const products = require("./products");
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello This is custom API ");
});
app.get("/products", (req, res) => {
  res.send(products);
});
app.listen(port, (req, res) => {
  console.log(`Server is listening at : http://${hostname}:${port}/`);
});
