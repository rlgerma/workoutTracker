const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 8000;

// Configuration
// ================================================================================================

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mongoose/mongodb connection
// =================================================================================================

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// HTML & API routes
require('./routes/htmlRoutes')(app);
require('./routes/api')(app);

// ===============================================================================================

db.Workout.create({ name: "woDb" })
  .then(dbWorkouts => {
    console.log(dbWorkouts);
  })
  .catch(({ message }) => {
    console.log(message);
  });

// listen for PORT | localhost
app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }

  console.info(`>>> 🌎 Open https://localhost/${PORT} in browser.`);
});
module.exports = app;
