const express = require('express');

const app = express();
const { getUsers } = require('./utils/handleFs');

app.use(express.json());

app.get('/', async (req, res) => res.status(200).send(await getUsers()));

module.exports = app;
