let trainers = [];

exports.getAllTrainers = (req, res) => {
  res.json(trainers);
};

exports.getTrainerById = (req, res) => {
  const trainer = trainers.find(t => t.id === req.params.id);
  if (!trainer) return res.status(404).json({ message: 'Trainer not found' });
  res.json(trainer);
};

exports.createTrainer = (req, res) => {
  const newTrainer = req.body;
  trainers.push(newTrainer);
  res.status(201).json(newTrainer);
};

exports.updateTrainer = (req, res) => {
  const index = trainers.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Trainer not found' });
  trainers[index] = req.body;
  res.json(trainers[index]);
};

exports.deleteTrainer = (req, res) => {
  trainers = trainers.filter(t => t.id !== req.params.id);
  res.status(204).send();
};

exports.getTrainerActivities = (req, res) => {
  const trainer = trainers.find(t => t.id === req.params.id);
  if (!trainer) return res.status(404).json({ message: 'Trainer not found' });
  res.json({ actividades: [`Clase 1 con ${trainer.nombre}`, `Clase 2 con ${trainer.nombre}`] });
};
