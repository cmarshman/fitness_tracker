const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String, 
                trim: true,
                required: "You must pick a type of exercies."
            },
            name: {
                type: String, 
                trim: true,
                required: "You must pick an exercise name."
            },
            duration: {
                type: Number, 
                required: "You must set a duration(in minutes)."
            },
            weight: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }
        }
    ]
},
{
    toJSON: {
      virtuals: true
    }
  }
);
WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;