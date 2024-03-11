const express = require('express');
const { MongoClient } = require('mongodb');
const ENV = require('./environment/environment');

const mongoose = require('mongoose');


const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

const uri = env.uri;
const client = new MongoClient(uri);


mongoose.connect(uri).then(() => {
  console.log('Connected to MongoDB with Success !');
}).catch((err) => {
  console.log('MongoDB ERROR', err);
});