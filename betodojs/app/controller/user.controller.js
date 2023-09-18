const User = require("../model/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs/dist/bcrypt");
const crypto = require('crypto');

const index = async (req, res) => {
  try {
      const users = await User.query();

      res.status(200).json({
        status: 200,
        message: "OK",
        data: users,
      });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const store = async (req, res) => {
  try {
    const user = await User.query().insert({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });

    res.status(200).json({
      status: 200,
      message: "OK",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const show = async (req, res) => {
  try {
    const user = await User.query().findById(req.params.id);

    res.status(200).json({
      status: 200,
      message: "OK",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const update = async (req, res) => {
  try {
    const user = await User.query()
      .findById(req.params.id)
      .patch({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      });

      res.status(200).json({
        status: 200,
        message: "OK",
        data: user,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const destroy = async (req, res) => {
  try {
    const user = await User.query().deleteById(req.params.id);

    res.status(200).json({
      status: 200,
      message: "OK",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const auth = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.query().findOne({email});

    if (!user){
        res.status(400).json({
          status: 400,
          message: "Email Incorrect",
        });
    }else{
      const userPassword = user.password;
      const loginPassword = req.body.password;

      const isMatch = await bcrypt.compare(loginPassword, userPassword);

      if (isMatch){
        const secretKey = crypto.randomBytes(20).toString('hex');
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            name: user.name,
          },
            secretKey,
          {
            expiresIn: '1h',
          }
        );

        process.env.APP_KEY = secretKey;

        res.status(200).json({
          status: 200,
          message: "Logged In",
          token: token,
          name: user.name,
          email: user.email,
        });
      }else{
        res.status(400).json({
          status: 400,
          message: "Password Incorrect",
        });
      }

    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

module.exports = {
  index,
  store,
  show,
  update,
  destroy,
  auth,
};
