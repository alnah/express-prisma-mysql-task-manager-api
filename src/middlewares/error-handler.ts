import { ErrorHandlingRequestType } from "../types";

const errorHandler: ErrorHandlingRequestType = (err, req, res, next) => {
  const statusCode = "statusCode" in err ? err.statusCode : 500;
  const error = err.message || "Internal Server Error";
  const stack = process.env.NODE_ENV === "production" ? null : err.stack;

  return res.status(statusCode).json({
    error,
    stack,
  });
};

export default errorHandler;
