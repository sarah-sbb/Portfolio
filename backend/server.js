// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const projectsRouter = require('./routes/projects');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(cors({ origin: 'http://localhost:3001' }));


app.use(cors());
app.use(express.json());

app.use('/api/projects', projectsRouter);

app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend de ton portfolio !');
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});