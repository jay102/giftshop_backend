const express = require('express');
const User = require('../database/models/user');
const controller = require('../controllers/auth.controller')(User);


const router = express.Router();

const authenticationRouter = () => {
  // destructure controller to pull out functions
  const { login, register } = controller;

  router.route('/login')
    .post(login);

  router.route('/register')
    .post(register);

  return router;
};

module.exports = authenticationRouter;
