const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const createAccessToken = require('../utils/jwt');
const TOKEN_SECRET = require('../config/token.config');
const { v4 } = require('uuid');

const authController = {};

authController.login = async (req, res) => {
  try {
    // const { email, password } = req.body;

    const userFound = await UserModel.findOne({ email });

    if (!userFound)
      return res.status(400).send({
        error: 'The email does not exist'
      });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).send({
        error: 'The password is incorrect'
      });
    }

    const token = await createAccessToken({
      // _id: userFound._id,
      // username: userFound.username
    });

    return res.cookie('token', token).send({
      // id: userFound._id,
      // name: userFound.name,
      // username: userFound.username,
      // email: userFound.email,
      // active: userFound.active
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

authController.register = async (req, res) => {
  // const { name, username, email, password } = req.body;

  try {
    // Generar un hash de la contraseña
    const saltRounds = 10; // Número de rondas de sal para la encriptación
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserModel({
      // name,
      // username,
      // email,
      // active: false,
      password: hashedPassword // Guarda la contraseña encriptada en la base de datos
    });

    await newUser.save();
    res.status(201).send({ message: 'User registered' });
  } catch (error) {
    console.error('Error al registrar al usuario:', error);
    res.status(500).send({ error: 'Error al registrar al usuario' });
  }
};

authController.verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).send({ message: 'Not Token' });

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    try {
      if (error) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      const userFound = await UserModel.findById(user._id);

      if (!userFound) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({
        // id: userFound._id,
        // name: userFound.name,
        // username: userFound.username,
        // email: userFound.email,
        // active: userFound.active
      });
    } catch (error) {
      console.error('Error while verifying token:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });
};

module.exports = authController;
