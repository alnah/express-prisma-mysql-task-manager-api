import { Request, Response, NextFunction } from "express";

type RequestHandlerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

type ErrorHandlingRequestType = (
  err: Error | CustomApiErrorType,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

type CustomApiErrorType = Error & { statusCode: number };

type CustomErrorType = (
  message: string,
  statusCode: number
) => CustomApiErrorType;
