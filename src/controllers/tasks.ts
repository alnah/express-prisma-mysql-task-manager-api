import { PrismaClient } from "@prisma/client";

import { RequestHandlerType } from "../types";
import asyncWrapper from "../middlewares/async";
import createCustomError from "../errors/custom-error";

const prisma = new PrismaClient();

const invalidInputName = createCustomError(
  "Invalid input: 'name' must be a non-empty string",
  400
);

const taskNotFound = (id: string) =>
  createCustomError(`Task not found with id ${id}`, 404);

const getTasks: RequestHandlerType = asyncWrapper(async (req, res, next) => {
  const tasks = await prisma.task.findMany();
  return res.status(200).json(tasks);
});

const createTask: RequestHandlerType = asyncWrapper(async (req, res, next) => {
  const { name, completed } = req.body;
  if (!name || typeof name !== "string" || name.trim() === "") {
    return next(invalidInputName);
  }
  const task = await prisma.task.create({ data: { name, completed } });
  return res.status(201).json(task);
});

const getTask: RequestHandlerType = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await prisma.task.findUnique({
    where: { id: Number(id) },
  });
  if (!task) return next(taskNotFound(id));
  return res.status(200).json(task);
});

const updateTask: RequestHandlerType = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const taskExists = await prisma.task.findUnique({
    where: { id: Number(id) },
  });
  if (!taskExists) return next(taskNotFound(id));
  const { name, completed } = req.body;
  if (name !== undefined && (typeof name !== "string" || name.trim() === "")) {
    return next(invalidInputName);
  }
  const updateData: { name?: string; completed?: boolean } = {};
  if (name !== undefined) updateData.name = name;
  if (completed !== undefined) updateData.completed = completed;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: updateData,
  });
  return res.status(200).json(task);
});

const deleteTask: RequestHandlerType = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const taskExists = await prisma.task.findUnique({
    where: { id: Number(id) },
  });
  if (!taskExists) return next(taskNotFound(id));
  const task = await prisma.task.delete({ where: { id: Number(id) } });
  return res.status(200).json(task);
});

export { getTasks, createTask, getTask, updateTask, deleteTask };
