const express = require('express');
const Router = require('../routes/project-router.js');

const server = express();

server.use(express.json());
server.use('/projects', Router);

server.get('/', (req, res) => {
  res.send(`You have reached the root directory.`);
});

module.exports = server;