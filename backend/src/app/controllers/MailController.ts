import {
  Router,
  Request,
  Response,
  RequestHandler,
  NextFunction,
} from "express";
import { StatusCodes } from "http-status-codes";
import MailService from "../services/MailService";
import ApiResponse from "../entities/api/ApiResponse";

const MailRouter: Router = Router();

MailRouter.post("/send", (async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { to, subject, text } = request.body;

    await MailService.sendMail(to, subject, text);

    const statusCode = StatusCodes.OK;

    const apiResponse = new ApiResponse<string>(
      statusCode,
      "Email enviado com sucesso!"
    );

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default MailRouter;
