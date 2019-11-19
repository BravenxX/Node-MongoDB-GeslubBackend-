const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  nombre: String,
  login: Boolean,
  password: String,
  correo: { type: String, unique: true },
  grupo: String,
  habilitado: Boolean
});

module.exports = model("User", userSchema);
