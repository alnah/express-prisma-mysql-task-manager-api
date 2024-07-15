import { CustomErrorType } from "../types/index";

class CustomApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError: CustomErrorType = (message, statusCode) => {
  return new CustomApiError(message, statusCode);
};

export default createCustomError;

export { CustomApiError, createCustomError };
