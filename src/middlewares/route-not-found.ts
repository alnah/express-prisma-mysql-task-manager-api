import { RequestHandlerType } from "../types";

const routeNotFound: RequestHandlerType = (req, res, next) => {
  res.status(404).json({
    error: "Route does not exist",
    path: req.originalUrl,
  });
  next();
};

export default routeNotFound;
