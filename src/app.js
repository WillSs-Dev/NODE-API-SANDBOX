const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send('<h1>Data will be here soon...</h1>'));

module.exports = app;
