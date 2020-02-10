var router = require("express").Router();

var Workout = require("../models/workout");

console.log("api routes", Workout);
router.post("/api/workouts", function(req, res) {
  console.log("post");
  Workout.create({})
    .then(function(dbWorkout) {
      console.log("data from post", dbWorkout);
      res.json(dbWorkout);
    })
    .catch(function(err) {
      console.log("error", err);
      res.json(err);
    });
});
router.put("/api/workouts/:id", function(_ref, res) {
  var body = _ref.body,
    params = _ref.params;
  Workout.findByIdAndUpdate(
    params.id,
    {
      $push: {
        exercises: body
      }
    },
    {
      new: true,
      runValidators: true
    }
  )
    .then(function(dbWorkout) {
      res.json(dbWorkout);
    })
    .catch(function(err) {
      res.json(err);
    });
});
router.get("/api/workouts", function(req, res) {
  Workout.find()
    .then(function(dbWorkouts) {
      res.json(dbWorkouts);
    })
    .catch(function(err) {
      res.json(err);
    });
});
router.get("/api/workouts/range", function(req, res) {
  Workout.find({})
    .limit(7)
    .then(function(dbWorkouts) {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
