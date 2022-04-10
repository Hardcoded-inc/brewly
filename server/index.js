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
  Coffee.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error("error: " + err);
      res.status(500).send(err);
    });
});

app.post("/coffee", (req, res) => {
  const newCoffee = new Coffee(req.body);

  newCoffee
    .save()
    .then((savedCoffee) => {
      res.status(200).send(savedCoffee);
    })
    .catch((err) => {
      console.error("error: " + err);
      res.status(500).send(err);
    });
});

// // DELETE
// app.delete("/user/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const userDelete = await Users.remove({ _id: id });
//     res.send("User deleted successfully");
//   } catch (err) {
//     console.log("~ err", err);
//   }
// });
//
// // UPDATE
// app.put("/user/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const userDelete = await Users.findByIdAndUpdate(
//       { _id: id },
//       { ...req.body }
//     );
//     res.send("User updated successfully");
//   } catch (err) {
//     console.log("~ err", err);
//   }
// });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port || 3001} `);
});
