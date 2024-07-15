import { RequestHandler } from "../types";

const asyncWrapper =
  (callback: RequestHandler): RequestHandler =>
  (req, res, next) => {
    try {
      callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default asyncWrapper;
