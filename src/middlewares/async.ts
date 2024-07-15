import { RequestHandlerType } from "../types";

const asyncWrapper =
  (callback: RequestHandlerType): RequestHandlerType =>
  (req, res, next) => {
    try {
      callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default asyncWrapper;
