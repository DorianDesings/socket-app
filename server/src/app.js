const express = require('express');
const cors = require('cors');
const app = express();

const { Server } = require('socket.io');
const establishSocketConnection = require('./socket-controller/socket-controller');

const server = require('http').Server(app);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

// Middlewares para cliente
app.use(cors());
app.use(express.json());

io.on('connection', socket => {
  establishSocketConnection(socket, io);
});

const startServer = () => {
  app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));
  server.listen(4000, () => console.log('Servidor Socket en ejecución en el puerto 4000'));
};

startServer();
