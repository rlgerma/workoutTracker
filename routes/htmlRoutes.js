var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    console.log(`Received a ${req.method} from URL ${req.url}`);
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/stats", function(req, res) {
    console.log(`Received a ${req.method} from URL ${req.url}`);
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
    
  app.get("/exercise", function(req, res) {
    console.log(`Received a ${req.method} from URL ${req.url}`);
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
};
