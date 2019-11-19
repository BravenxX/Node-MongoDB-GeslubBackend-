const usersCtrl = {};

const ActProg = require("../models/ActProg");

usersCtrl.getActivities = async (req, res) => {
  const actProgs = await ActProg.find();
  res.json(actProgs);
};

usersCtrl.getActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const actProg = await ActProg.findById(id);

    res.json(actProg);
  } catch (error) {
    res.json({ ERROR: error.message });
  }
};

usersCtrl.postActivity = async (req, res) => {
  try {
    const { data } = req.body;

    for (let i in data) {
      const item = data[i];

      const {
        consumoEstimado,
        tiempoEstimado,
        comentario,
        fechaProgramacion,
        fechaUltimaRealizacion,
        asignacionActividad
      } = item;

      const newActProg = new ActProg({
        consumoEstimado,
        tiempoEstimado,
        comentario,
        fechaProgramacion,
        fechaUltimaRealizacion,
        asignacionActividad
      });

      await newActProg.save();
    }

    res.json({ message: "Exitoso" });
  } catch (error) {
    res.json({ ERROR: error.message });
  }
};

usersCtrl.deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    await ActProg.findByIdAndDelete(id);

    res.json({ message: "Act eliminada" });
  } catch (error) {
    res.json({ ERROR: error.message });
  }
};

usersCtrl.putActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    await ActProg.findOneAndUpdate({ _id: id }, body);

    res.json({ message: "Act actualizada" });
  } catch (error) {
    res.json({ ERROR: error.message });
  }
};

module.exports = usersCtrl;
