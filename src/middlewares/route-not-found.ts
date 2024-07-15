import { RequestHandler } from "../types";

const routeNotFound: RequestHandler = (req, res, next) => {
  return res.status(404).json({
    error: "Route does not exist",
    path: req.originalUrl,
  });
};

export default routeNotFound;
