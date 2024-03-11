const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

const { MongoClient } = require('mongodb');
const uri = "votre_uri_mongodb";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Erreur de connexion à MongoDB', err);
    process.exit(1);
  }
  console.log('Connecté à la base de données MongoDB');
});