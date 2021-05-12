const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

(async () => {

const url = 'mongodb://localhost:27017';

const dbName = 'ocean_bancodados_11_05_2021';

console.info('Conectando ao banco de dados...');

const client = await MongoClient.connect(url, { useUnifiedTopology: true });

console.info('MongoDB conectado com sucesso!!');

const db = client.db(dbName);

const app = express();

app.use(express.json());

app.get('/hello', function (req, res) {
  res.send('Hello World');
});

const mensagensCollection = db.collection('mensagens');

// CRUD (Create, Read, Update, Delete)

// GET: READ ALL (exibir todos os registros)
app.get('/mensagens', async (req, res) => {
  const listaMensagens = await mensagensCollection.find().toArray();

  res.send(listaMensagens);
});

// GET: READ SINGLE (exibir apenas um registro)
app.get('/mensagens/:id', async (req, res) => {
  const id = req.params.id;

  const mensagem = await mensagensCollection.findOne({ _id: ObjectId(id) });

  if (!mensagem) {
    res.send('Mensagem não encontrada.');

    return;
  }

  res.send(mensagem);
});

// POST: CREATE (criar um registro)
app.post('/mensagens', async (req, res) => {
  const mensagem = req.body;

  await mensagensCollection.insertOne(mensagem);

  res.send(mensagem);
});

// PUT: UPDATE (editar um registro)
app.put('/mensagens/:id', async (req, res) => {
  const id = req.params.id;

  const mensagem = req.body;

  await mensagensCollection.updateOne(
    { _id: ObjectId(id) },
    { $set: mensagem }
  );

  res.send('Mensagem editada com sucesso.');
});

// DELETE: DELETE (remover um registro)
app.delete('/mensagens/:id', async (req, res) => {
  const id = req.params.id;

  await mensagensCollection.deleteOne({ _id: ObjectId(id) });

  res.send('Mensagem removida com sucesso.');
});

app.listen(3000);

})();
