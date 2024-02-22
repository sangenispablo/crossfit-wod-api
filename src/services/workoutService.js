const { v4: uuid } = require("uuid");

const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId);
  return workout;
};

const createNewWorkout = (newWorkout) => {
  // aca usamos el operador spread para expandir el JSON en la nueva variable
  const workoutToInsert = {
    ...newWorkout,
    // genero el id
    id: uuid(),
    // cargo las fechas
    // createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    // updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    createdAt: new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    }),
    updatedAt: new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
