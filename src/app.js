const express = require('express');

const app = express();
const { getUsers } = require('./utils/handleFs');

app.use(express.json());

app.get('/', async (req, res) => res.status(200).send(await getUsers()));

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const users = await getUsers();
  const requestedUser = users.find((user) => user.id === Number(id));
  res.status(200).send(requestedUser);
});

module.exports = app;
