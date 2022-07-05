// importo un paquete para generar uui
const { v4: uuid } = require("uuid");

// traigo las funciones para manejar la base de datos y la meto a todas en Workout
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  // asigno a una const todos los entrenos
  const allWorkouts = Workout.getAllWorkouts();
  // y devuelvo esos datos al controlador
  return allWorkouts;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = (newWorkout) => {
  // creo el objeto con el parametro mas otras propiedades
  const workoutToInsert = {
    id: uuid(),
    ...newWorkout,
    createdAt: new Date().toLocaleString("es-AR"),
    updatedAt: new Date().toLocaleString("es-AR"),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
