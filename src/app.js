const express = require('express');
const conectarDB = require('./db'); // Asegúrate que ./db exporte una función para conectar a la BD
const trainersRoutes = require('./routes/trainers'); // Asegúrate de tener este archivo

const app = express();

// Conexión a la base de datos
conectarDB();

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('API funcionando');
});

// Rutas de entrenadores
app.use('/trainers', trainersRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
});
