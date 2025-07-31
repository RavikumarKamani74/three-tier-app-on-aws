const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const db = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`✅ DB Connected (from db.js)`);
});
