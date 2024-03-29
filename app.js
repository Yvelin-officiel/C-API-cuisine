const express = require('express');
const ENV = require('./environment/environment');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

const uri = ENV.uri;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Erreur de connexion à MongoDB', err);
    process.exit(1);
  }
  console.log('Connecté à la base de données MongoDB');
  // Vous pouvez commencer à utiliser MongoDB ici
});

//  ROUTES

app.post('/ajouter/user', async (req, res) => {
  try {
    const collection = client.db("test").collection("users");
    const result = await collection.insertOne(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/lire/user', async (req, res) => {
  try {
    const collection = client.db("test").collection("users");
    const result = await collection.find({}).toArray();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/ajouter/recipe', async (req, res) => {
  try {
    const collection = client.db("test").collection("recipes");
    const result = await collection.insertOne(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/lire/recipe', async (req, res) => {
  try {
    const collection = client.db("test").collection("recipes");
    const result = await collection.find({}).toArray();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/ajouter/comment', async (req, res) => {
  try {
    const collection = client.db("test").collection("comments");
    const result = await collection.insertOne(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/lire/comment', async (req, res) => {
  try {
    const collection = client.db("test").collection("comments");
    const result = await collection.find({}).toArray();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
