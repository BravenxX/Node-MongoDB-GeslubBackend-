const mongoose = require("mongoose");

// Mongoose usa el protocolo mongodb

const URI = "mongodb://localhost/geslubDB";

mongoose.connect(URI, {
  useNewUrlParse: true,
  useCreateIndex: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB conectada");
});
