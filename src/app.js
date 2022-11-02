const express = require('express');

const app = express();
const { getUsers } = require('./utils/handleFs');

app.use(express.json());

app.get('/', async (req, res) => res.status(200).send(await getUsers()));

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const users = await getUsers();
  const requestedUser = users.find((user) => user.id === Number(id));
  res.status(200).send(requestedUser);
});

app.post('/users', (req, res) => {
  res.status(201).send('Data will be here soon...');
});

module.exports = app;
