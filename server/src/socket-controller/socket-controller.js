const establishSocketConnection = (socket, io) => {
  console.log('Cliente conectado');

  socket.on('message', data => {
    console.log(data);
    io.emit('response', data);
  });
};

module.exports = establishSocketConnection;
