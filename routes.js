app.post('/ajouter', async (req, res) => {
    try {
      const collection = client.db("test").collection("documents");
      const result = await collection.insertOne(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.get('/lire', async (req, res) => {
    try {
      const collection = client.db("test").collection("documents");
      const result = await collection.find({}).toArray();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });