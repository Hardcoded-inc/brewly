const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const items = [{ name: "first" }, { name: "second" }, { name: "thrid" }];

app.get("/items", (req, res) => {
  res.send({ items });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
