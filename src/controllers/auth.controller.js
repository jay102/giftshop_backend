
const authController = (User) => {
  // user passed in here would be our user model used to access our database
  const login = (req, res) => {
    const { email } = req.body;
    console.log(email);
    User.findOne({
      where: { email: req.body.email },
    }).then((user) => {
      if (!user) {
        return res.status(400).json({
          error: 'Invalid credentials or no account with email',
        });
      } if (!user.validPassword(req.body.password)) {
        return res.status(400).json({
          error: 'Wrong password',
        });
      }
      return res.status(200).json({
        message: 'success',
        user,

      });
    }).catch((err) => {
      console.log(err)
      return res.status(400).json({
        error: err,
      });
    }
    )
  };

  const register = (req, res) => {
    const { role, name, password, email } = req.body
    User.create({
      role, name, email, password
    }).then((user) => {
      res.status(200).json({ message: 'User created successfully with name: ' + user.name + ' and email: ' + user.email });
    }).catch((err) => {
      console.log(err);
      res.status(400).json({
        error: err,
      });
    });
    console.log("res :", req.body);
  }
  const forgetPassword = (req, res) => {
    // 1. check user email exist
    // 2. if exist update the password field and return a response
    const { email } = req.body;
    const values = { password: req.body.password };
    const selector = { where: { email: req.body.email } }
    console.log(email);
    User.findOne({
      where: { email: req.body.email },
    }).then((user) => {
      if (!email) {
        return res.status(400).json({
          error: `This email doesn't exist`,
        });
      }
      user.update(values, selector).then((user) => {
        res.status(200).json({ message: 'Password changed successfully', user })
      }).catch((err) => {
        res.status(400).json({ error: err })
      });

    })
  }
  return {
    login, register, forgetPassword
  };
};
module.exports = authController;

