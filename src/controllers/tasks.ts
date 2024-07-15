import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "../types";

const prisma = new PrismaClient();

const getTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await prisma.task.findMany();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createTask: RequestHandler = async (req, res, next) => {
  const { name, completed } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json({ error: "Invalid input: 'name' must be a non-empty string" });
  }

  try {
    const task = await prisma.task.create({ data: { name, completed } });
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getTask: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
    });
    if (!task) return res.status(404).json({ error: "Task not found" });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateTask: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const { name, completed } = req.body;

  if (name !== undefined && (typeof name !== "string" || name.trim() === "")) {
    return res
      .status(400)
      .json({ error: "Invalid input: 'name' must be a non-empty string" });
  }

  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { name, completed },
    });
    if (!task) return res.status(404).json({ error: "Task not found" });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteTask: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.delete({ where: { id: Number(id) } });
    if (!task) return res.status(404).json({ error: "Task not found" });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { getTasks, createTask, getTask, updateTask, deleteTask };
