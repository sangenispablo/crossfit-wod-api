// traigo el servicio para usarlo en el controlador
const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  // consumo el servicio
  const allWorkouts = workoutService.getAllWorkouts();
  // retorno el conjunto de dato
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout();
  res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
  // traemos el objeto del body del request
  const { body } = req;
  // verifico que los datos que vienen en el body no sean nullos
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  // creamos el objeto nuevo
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  // uso el servicio para que mediante utils se guarde en el archivo JSON
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  // retorno al cliente el status 201 y el nuevo objeto agregado
  res.status(201).send({ status: "OK", data: createdWorkout });
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
