import { PrismaClient } from "@prisma/client";

import { RequestHandler } from "../types";
import asyncWrapper from "../middlewares/async";

const prisma = new PrismaClient();

const getTasks: RequestHandler = asyncWrapper(async (req, res, next) => {
  const tasks = await prisma.task.findMany();
  return res.status(200).json(tasks);
});

const createTask: RequestHandler = asyncWrapper(async (req, res, next) => {
  const { name, completed } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json({ error: "Invalid input: 'name' must be a non-empty string" });
  }

  const task = await prisma.task.create({ data: { name, completed } });
  return res.status(201).json(task);
});

const getTask: RequestHandler = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await prisma.task.findUnique({
    where: { id: Number(id) },
  });
  if (!task) return res.status(404).json({ error: "Task not found" });
  return res.status(200).json(task);
});

const updateTask: RequestHandler = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { name, completed } = req.body;

  if (name !== undefined && (typeof name !== "string" || name.trim() === "")) {
    return res
      .status(400)
      .json({ error: "Invalid input: 'name' must be a non-empty string" });
  }

  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { name, completed },
  });
  if (!task) return res.status(404).json({ error: "Task not found" });
  return res.status(200).json(task);
});

const deleteTask: RequestHandler = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await prisma.task.delete({ where: { id: Number(id) } });
  if (!task) return res.status(404).json({ error: "Task not found" });
  return res.status(200).json(task);
});

export { getTasks, createTask, getTask, updateTask, deleteTask };
