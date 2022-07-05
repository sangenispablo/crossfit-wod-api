// aca accedemos fisicamente a los datos
const DB = require("./db.json");

// importo la funcion para guardar array en un json
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  // acá devuelvo los datos
  return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
  // busco en DB.workouts si ya esta el nuevo Workout
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    // si ya esta en la DB retorno vacio
    return;
  }
  // agrego al array el nuevo Entreno
  DB.workouts.push(newWorkout);
  // uso la funcion para grabar el nuevo arreglo en el .JSON esta funcion esta en utils.js
  saveToDatabase(DB);
  // devuelvo el nuevo Entreno
  return newWorkout;
};

module.exports = { getAllWorkouts, createNewWorkout };
