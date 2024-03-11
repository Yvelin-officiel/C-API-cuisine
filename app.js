const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

const uri = "mongodb+srv://monAppMongoDB:36EfP42PA5OIikiL@monappmongodb.svepwii.mongodb.net/";

mongoose.connect(uri).then(() => {
  console.log('Connected to MongoDB with Success !');
}).catch((err) => {
  console.log('MongoDB ERROR', err);
});