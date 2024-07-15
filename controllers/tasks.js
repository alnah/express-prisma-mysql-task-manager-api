const getTasks = (req, res, next) => {
  res.send("get all tasks");
};

const createTask = (req, res, next) => {
  res.send("create task");
};

const getTask = (req, res, next) => {
  res.send("get task");
};

const updateTask = (req, res, next) => {
  res.send("update task");
};

const deleteTask = (req, res, next) => {
  res.send("delete task");
};

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
