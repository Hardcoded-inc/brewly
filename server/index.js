const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Coffee } = require("./models");

// Load .env into process.env
require("dotenv").config();

// Connect to DB
const mongoUser = process.env.MONGO_DB_USER_LOGIN;
const mongoPassword = process.env.MONGO_DB_USER_PASSWORD;
const dbUri = `mongodb+srv://${mongoUser}:${mongoPassword}@brewlydb.h1xg0.mongodb.net/brewlydb?retryWrites=true&w=majority`;
mongoose.connect(dbUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo db");
});

// App

const app = express();
app.use(cors());

app.get("/coffee", (req, res) => {
  Coffee.find({}, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
});

app.post("/coffee", (req, res) => {
  const newCoffee = new Coffee(req.body);

  newCoffee.save((err, coffee) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(coffee);
  });
});

app.delete("/coffee/:id", (req, res) => {
  const { id } = req.params;
  Coffee.findByIdAndRemove(id, (err, coffee) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(coffee);
  });
});

app.put("/coffee/:id", (req, res) => {
  const { id } = req.params;
  Coffee.findByIdAndUpdate(id, req.body, { new: true }, (err, coffee) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(coffee);
  });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port || 3001} `);
});
