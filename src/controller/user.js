const userModels = require("../models/user");

const getUser = async (req, res) => {
  try {
    const [data] = await userModels.getUser();
    res.json({
      message: "GET user berhasil",
      data: data,
    });
  } catch (error) {
    res.json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const createUser = async (req, res) => {
  const { body } = req;
  try {
    await userModels.createUser(body);
    res.json({
      message: "CREATE user berhasil",
      data: body,
    });
  } catch (error) {
    res.json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await userModels.updateUser(body, id);
    res.json({
      message: "UPDATE user berhasil",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModels.deleteUser(id);
    res.json({
      message: "DELETE user berhasil",
      data: null,
    });
  } catch (error) {
    res.json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
