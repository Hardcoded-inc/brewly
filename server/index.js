const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Connect to DB
const mongoUser = process.env.MONGO_DB_USER_LOGIN;
const mongoPassword = process.env.MONGO_DB_USER_PASSWORD;
const dbUri = `mongodb+srv://${mongoUser}:${mongoPassword}@brewlydb.h1xg0.mongodb.net/brewlydb?retryWrites=true&w=majority`;
mongoose.connect(dbUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo db");
});

// Schema
const Schema = mongoose.Schema;
const CoffeeSchema = new Schema({
  name: String,
  acidity: String,
  bitterness: String,
  sweetness: String,
  origin: String,
  flavors: [String],
});

const Coffee = mongoose.model("Coffee", CoffeeSchema);

// App

const app = express();
const port = 3001;

app.use(cors());

app.get("/coffee", (req, res) => {
  Coffee.find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.error("error: " + err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
