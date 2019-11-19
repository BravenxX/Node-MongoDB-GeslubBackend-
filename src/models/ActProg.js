const { Schema, model } = require("mongoose");

const asignacionActividadSchema = require("./asignacionActividad");

const actProgSchema = new Schema(
  {
    consumoEstimado: Number,
    tiempoEstimado: Number,
    comentario: {
      type: String,
      trim: true
    },
    fechaProgramacion: {
      type: Date,
      required: true
    },
    fechaUltimaRealizacion: Date,
    asignacionActividad: asignacionActividadSchema,
    habilitado: Boolean
  },
  {
    timestamps: true
  }
);

module.exports = model("ActProg", actProgSchema);
