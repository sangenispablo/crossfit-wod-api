const fs = require("fs");

// funcion para guardar un array de objetos en un archivo en este caso db.json
const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = { saveToDatabase };
