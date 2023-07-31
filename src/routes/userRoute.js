import express from "express";

import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controller/userController.js";

const router = express.Router();

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);

export default router;
