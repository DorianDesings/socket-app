const { v4 } = require('uuid');
let chatUsers = [];

const addUser = (socket, io, username) => {
  // Asociar el nombre de usuario con el ID del socket
  socket.username = username;

  chatUsers.push({ id: socket.id, username: socket.username });
  console.log(`Nuevo usuario: ${username}`);

  // Emitir un mensaje de bienvenida a ese usuario
  socket.emit('welcome', { id: v4(), text: `Bienvenido, ${username}!` });

  // Emitir actualización de usuarios a todos los clientes
  io.emit('update users', chatUsers);
};

const handleDisconnect = (socket, io) => {
  chatUsers = chatUsers.filter(user => user.id !== socket.id);
  // Emitir actualización de usuarios a todos los clientes
  io.emit('update users', chatUsers);
};

const establishSocketConnection = (socket, io) => {
  // Verificar si el nombre de usuario ya está establecido
  if (!socket.username) {
    socket.emit('not username');
  }

  // Escuchar evento de autenticación
  socket.on('authenticate', username => {
    addUser(socket, io, username);
  });

  // Recibir mensaje
  socket.on('send message', message => {
    console.log(message);
    io.emit('new message', { id: v4(), senderId: socket.id, text: message, username: socket.username });
  });

  // Manejar la desconexión del usuario
  socket.on('disconnect', () => {
    handleDisconnect(socket, io);
  });
};

module.exports = establishSocketConnection;
