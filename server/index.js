const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const items = [
  { id: 1, name: "first" },
  { id: 2, name: "second" },
  { id: 3, name: "thrid" },
];

app.get("/items", (req, res) => {
  res.send({ items });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
