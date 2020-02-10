var express = require("express");

var mongoose = require("mongoose");

var logger = require("morgan");

var app = express();

// Configuration
// ================================================================================================

var PORT = process.env.PORT || 9000;
app.use(logger("dev"));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static("public"));

// Mongoose/mongodb connection
// =================================================================================================

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}); // HTML & API routes

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

// listen for PORT | localhost

app.listen(PORT, function() {
  console.log("  App running on port " + PORT + "!");
});
