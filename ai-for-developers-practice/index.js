const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
  res.json({ message: '¡Hola, API con Express!' });
});

// Ruta de ejemplo
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' }
  ]);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});