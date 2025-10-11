const request = require('supertest');
const express = require('express');

// Simulamos una app Express simple para el endpoint /ping
const app = express();
app.get('/ping', (req, res) => {
  res.send('pong');
});

describe('GET /ping', () => {
  it('debe responder con "pong"', async () => {
    const response = await request(app).get('/ping');
    expect(response.status).toBe(200);
    expect(response.text).toBe('pong');
  });
});