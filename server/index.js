const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const mockedCoffeee = [
  {
    id: 1,
    name: "Mazenda Moinho",
    acidity: "high",
    bitterness: "medium",
    sweetness: "low",
    origin: "Brasil",
    flavors: ["orange", "grapes", "rose"],
  },
  {
    id: 2,
    name: "Caffe Grano Nicaragua",
    acidity: "high",
    bitterness: "medium",
    sweetness: "low",
    origin: "Nikaragua",
    flavors: ["raspberry", "chocolade", "lemon"],
  },
  {
    id: 3,
    name: "Kafar classic",
    acidity: "high",
    bitterness: "medium",
    sweetness: "low",
    origin: "India",
    flavors: ["pear", "caremel", "cacao"],
  },
];

app.get("/coffee", (req, res) => {
  res.send({ coffee: mockedCoffeee });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
