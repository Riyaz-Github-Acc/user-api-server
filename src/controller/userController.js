import expressAsyncHandler from "express-async-handler";
import User from "../model/userModel.js";

export const createUser = expressAsyncHandler(async (req, res) => {
  const newUser = new User(req.body);
  const { name } = req.body;
  // User exists
  const userExist = await User.findOne({
    name: { $regex: name, $options: "i" },
  });
  if (userExist) {
    throw new Error("User already exists!");
  }

  // POST
  const savedUser = await newUser.save();
  res.status(201).json({
    status: "success",
    message: "User created successfully!",
    data: savedUser,
  });
});

// UPDATE
export const updateUser = expressAsyncHandler(async (req, res) => {
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
});

// DELETE
export const deleteUser = expressAsyncHandler(async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    message: "User deleted successfully!",
  });
});

// GET
export const getUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    status: "success",
    message: "User fetched successfully!",
    data: user,
  });
});

// GET ALL
export const getAllUsers = expressAsyncHandler(async (req, res) => {
  const allUsers = await User.find({});
  res.status(200).json({
    status: "success",
    message: "Users fetched successfully!",
    data: allUsers,
  });
});
