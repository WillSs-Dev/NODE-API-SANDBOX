const express = require('express');

const app = express();
const { getUsers, addUser } = require('./utils/handleFs');
const { userIsValid } = require('./utils/handleReqFormat');

app.use(express.json());

app.get('/', async (req, res) => res.status(200).send(await getUsers()));

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const users = await getUsers();
  const requestedUser = users.find((user) => user.id === Number(id));
  res.status(200).send(requestedUser);
});

app.post('/users', async (req, res) => {
  if (userIsValid(req.body)) {
    res.status(201).send(await addUser(req.body));
  } else {
    res.status(400).send('Invalid format');
  }
});

module.exports = app;
