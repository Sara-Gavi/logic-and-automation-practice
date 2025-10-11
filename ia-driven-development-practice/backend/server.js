const express = require('express');
const cors = require('cors'); // Agrega esta línea
const app = express();
const port = 3000;

// Permitir CORS solo desde http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});