const { Schema, model } = require("mongoose");

const asignacionActividadSchema = new Schema(
  {
    intervalo: Number,
    habilitado: Boolean
  },
  {
    timestamps: true
  }
);

module.exports = asignacionActividadSchema;
