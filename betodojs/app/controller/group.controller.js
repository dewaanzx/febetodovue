const Group = require("../model/group.model");

const bcrypt = require("bcryptjs/dist/bcrypt");

const index = async (req, res) => {
  try {
    const userid = req.user.id;
    const groups = await Group.query().where('user_id', userid);

    res.status(200).json({
      status: 200,
      message: "OK",
      data: groups,
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
    const userid = req.user.id;
    const group = await Group.query().insert({
      user_id: userid,
      name: req.body.name,
    });

    res.status(200).json({
      status: 200,
      message: "OK",
      data: group,
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
    const group = await Group.query()
      .findById(req.params.id)
      .patch({
        name: req.body.name,
      });

      res.status(200).json({
        status: 200,
        message: "OK",
        data: group,
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
    const group = await Group.query().deleteById(req.params.id);

    res.status(200).json({
      status: 200,
      message: "OK",
      data: group,
    });
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
  update,
  destroy,
};
