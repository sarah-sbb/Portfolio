require('dotenv').config(); // Charger les variables d'environnement

const mongoose = require('mongoose');
const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch((error) => console.error('Database connection error:', error));