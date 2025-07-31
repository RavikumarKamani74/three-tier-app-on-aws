const db = require('../db');

exports.createProduct = (req, res) => {
  const { name, description, price } = req.body;
  db.query(
    'INSERT INTO products (name, description, price) VALUES (?, ?, ?)',
    [name, description, price],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, name, price });
    }
  );
};

exports.getProducts = (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
