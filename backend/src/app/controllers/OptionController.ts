import {
  Router,
  Request,
  Response,
  RequestHandler,
  NextFunction,
} from "express";
import { StatusCodes } from "http-status-codes";

import OptionService from "../services/OptionService";
import Option from "../entities/database/Option";
import OptionRetrievalDTO from "../entities/dto/OptionRetrievalDTO";
import ApiResponse from "../entities/api/ApiResponse";

const optionRouter: Router = Router();

optionRouter.get("/:id", (async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(request.params.id);

    const rawOption: Option = await OptionService.findOptionById(id);

    const mappedOption: OptionRetrievalDTO = new OptionRetrievalDTO(rawOption);

    const statusCode: number = StatusCodes.OK;

    const apiResponse: ApiResponse<OptionRetrievalDTO> =
      new ApiResponse<OptionRetrievalDTO>(statusCode, mappedOption);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

optionRouter.get("/statement/:id", (async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(request.params.id);

    const rawOptions: Option[] = await OptionService.findOptionsByStatementId(
      id
    );

    const mappedOptions: OptionRetrievalDTO[] = rawOptions.map(
      (option) => new OptionRetrievalDTO(option)
    );

    const statusCode: number = StatusCodes.OK;

    const apiResponse: ApiResponse<OptionRetrievalDTO[]> = new ApiResponse<
      OptionRetrievalDTO[]
    >(statusCode, mappedOptions);

    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default optionRouter;
