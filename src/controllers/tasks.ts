import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;

const getTasks: RequestHandler = async (req, res, next) => {
  res.send("get tasks");
};

const createTask: RequestHandler = async (req, res, next) => {
  res.send("create task");
};

const getTask: RequestHandler = async (req, res, next) => {
  res.send("get task");
};

const updateTask: RequestHandler = (req, res, next) => {
  res.send("update task");
};

const deleteTask: RequestHandler = (req, res, next) => {
  res.send("delete task");
};

export { getTasks, createTask, getTask, updateTask, deleteTask };
