
const authController = (User) => {
  // user passed in here would be our user model used to access our database

  const login = (req, res) => {
    const { email } = req.body;
    User.findOne({
      where: { email },
    }).then((user) => {
      if (!user) {
        return res.status(400).json({
          error: 'invalid credentials or no account with email',
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
    }).catch((err) => res.status(400).json({
      error: err,
    }));
  };

  const register = (req, res) => {

  };


  return {
    login, register,
  };
};
module.exports = authController;
