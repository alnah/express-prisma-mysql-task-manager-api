import express from "express";

const router = express.Router();

import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks";

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
