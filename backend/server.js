// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

require('./models/connection');

dotenv.config();
const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(cors({ origin: 'http://localhost:3001' }));


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/works', require('./routes/works'));
app.use('/api/experiences', require('./routes/experiences'));
app.use('/api/news', require('./routes/news'));


app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend de ton portfolio !');
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});