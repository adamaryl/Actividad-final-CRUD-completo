const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'), (err) => {
  if (err) console.error(err.message);
  else console.log('Conectado a la base de datos SQLite');
});

db.run(`
  CREATE TABLE IF NOT EXISTS zapatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    modelo TEXT NOT NULL,
    precio REAL NOT NULL,
    descripcion TEXT
  )
`);

app.get('/api/zapatos', (req, res) => {
  db.all('SELECT * FROM zapatos', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/zapatos', (req, res) => {
  const { modelo, precio, descripcion } = req.body;
  db.run(
    `INSERT INTO zapatos (modelo, precio, descripcion) VALUES (?, ?, ?)`,
    [modelo, precio, descripcion],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

app.put('/api/zapatos/:id', (req, res) => {
  const { modelo, precio, descripcion } = req.body;
  const { id } = req.params;
  db.run(
    `UPDATE zapatos SET modelo = ?, precio = ?, descripcion = ? WHERE id = ?`,
    [modelo, precio, descripcion, id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ changes: this.changes });
    }
  );
});

app.delete('/api/zapatos/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM zapatos WHERE id = ?`, id, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ changes: this.changes });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});