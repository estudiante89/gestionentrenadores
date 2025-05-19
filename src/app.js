const express = require('express');
const trainersRoutes = require('./routes/trainers');
const app = express();

app.use(express.json());
app.use('/trainers', trainersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
