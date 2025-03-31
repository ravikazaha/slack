const express = require('express');
const soketio = require('socket.io');

const namespaces = require('./data/namespaces');

const app = express();

app.use(express.static(`${__dirname}/public`));

const server = app.listen(3000);

const io = soketio(server);

io.on('connection', (socket) => {
  console.log(socket.id, 'Has connected');
  socket.emit('welcome', 'Welcome to the server');

  socket.emit('namespaces', namespaces);
});
