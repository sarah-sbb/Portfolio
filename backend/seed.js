const mongoose = require('mongoose');
const Work = require('./models/Work');  // Importe ton modèle Work

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/Portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connecté');

    // Ajouter des données dans la collection 'works'
    const works = [
      {
        title: 'Mon vieux grimoire',
        description: 'Réalisation du backend d\'un site communautaire de partage de recettes de livre',
        skills: ['HTML', 'CSS', 'JavaScript, NodeJS, Express, MongoDB'],
        image: 'https://url_de_l_image_1.com',
        lien: 'https://github.com/sarah-sbb/P6_MonVieuxGrimoire.git'
      },
      {
        title: 'Kasa',
        description: 'Création du frontend du site de location de logement',
        skills: ['JavaScript', 'ReactJS', 'SASS'],
        image: 'https://url_de_l_image_2.com',
        lien: 'https://github.com/sarah-sbb/P5_Kasa.git'
      },
      {
        title: 'La planche à voix',
        description: 'Descriptio',
        skills: ['React', 'Node.js', 'Express'],
        image: 'https://url_de_l_image_2.com'
      },
      // Ajoute d'autres projets ici
    ];

    // Ajouter chaque projet dans la base de données
    Work.insertMany(works)
      .then(() => {
        console.log('Données insérées avec succès !');
        mongoose.connection.close();  // Ferme la connexion une fois l'insertion terminée
      })
      .catch((err) => {
        console.error('Erreur lors de l\'insertion :', err);
      });
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });