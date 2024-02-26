const { v4 } = require('uuid');
const UserModel = require('../models/user.model');

const controller = {};

// Obtener todos los usuarios
controller.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

// Obtener todos los usuarios
controller.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

controller.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(409).send({ error: 'User not Exists' });
    }

    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

controller.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(409).send({ error: 'User not Exists' });

    await UserModel.deleteOne({ _id: id });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

module.exports = controller;
