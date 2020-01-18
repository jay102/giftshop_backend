const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync();

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
      res.status(200).json({ message: 'success' });
    }).catch((err) => {
      console.log(err);
      res.status(400).json({
        error: err,
      });
    });
    console.log("res :", req.body);
  }
  const forgetPassword = (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    const hashed_password = bcrypt.hashSync(req.body.password, salt);
    const values = { password: hashed_password };
    const selector = { where: { email: req.body.email } }
    console.log(email);
    User.findOne({
      where: { email: req.body.email },
    }).then((user) => {
      if (!user) {
        console.log(user)
        return res.status(400).json({
          error: `This email doesn't exist`,
        });
      }
            User.update(values, selector).then((user) => {
        res.status(200).json({ message: 'Password changed successfully', user })
      }).catch((err) => {
        console.log(err)
        res.status(400).json({ error: err })

      });

    })
  }
  return {
    login, register, forgetPassword
  };
};
module.exports = authController;

