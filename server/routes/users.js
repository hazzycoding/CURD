import express from "express";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUsers,
} from "../controllers/users.js";

const router = express();

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUsers);

export default router;
