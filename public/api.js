"use strict";

var API = {
  getLastWorkout: async function getLastWorkout() {
    var res;

    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err);
    }

    var json = await res.json();
    return json[json.length - 1];
  },
  addExercise: async function addExercise(data) {
    var id = location.search.split("=")[1];
    var res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    var json = await res.json();
    return json;
  },
  createWorkout: async function createWorkout(data) {
    if (data === void 0) {
      data = {};
    }

    var res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    var json = await res.json();
    return json;
  },
  getWorkoutsInRange: async function getWorkoutsInRange() {
    var res = await fetch("/api/workouts/range");
    var json = await res.json();
    return json;
  }
};
