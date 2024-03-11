const express = require('express');
const { MongoClient } = require('mongodb');
const ENV = require('./environment/environment');

const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

const uri = env.uri;
const client = new MongoClient(uri);

client.connect(err => {
  if (err) {
    console.error('Erreur de connexion à MongoDB', err);
    process.exit(1);
  }
  console.log('Connecté à la base de données MongoDB');
});
