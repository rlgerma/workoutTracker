var router = require("express").Router();

var path = require("path");

router.get("/stats", function(req, res) {
  console.log("Received a " + req.method + " from URL " + req.url);
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
router.get("/exercise", function(req, res) {
  console.log("Received a " + req.method + " from URL " + req.url);
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
module.exports = router;
