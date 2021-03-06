const express = require('express');
const User = require('../database/models/user');
const controller = require('../controllers/auth.controller')(User);


const router = express.Router();

const authenticationRouter = () => {
  // destructure controller to pull out functions
  const { login, register,forgetPassword } = controller;
  router.route('/login')
  .get((req,res) => {
    res.json({res: "this is from login url"});
  })
    .post(login);

  router.route('/register')
  .get((req,res) =>{
    res.json({res:" register url "});
  })
    .post(register);
    
router.route('/forget-password')
.put(forgetPassword)

    

  return router;
};

module.exports = authenticationRouter;
