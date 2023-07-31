import User from "../model/userModel.js";

export const createUser = async (req, res, next) => {
  const newUser = new User(req.body);

  // POST
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      status: "success",
      message: "User created successfully!",
      data: savedUser,
    });
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: "User updated successfully!",
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "User deleted successfully!",
    });
  } catch (err) {
    next(err);
  }
};

// GET
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "User fetched successfully!",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({
      status: "success",
      message: "Users fetched successfully!",
      data: allUsers,
    });
  } catch (err) {
    next(err);
  }
};
