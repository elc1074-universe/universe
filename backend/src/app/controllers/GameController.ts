import {
  Router,
  Request,
  Response,
  RequestHandler,
  NextFunction,
} from "express";
import { StatusCodes } from "http-status-codes";
import GameService from "../services/GameService";
import Game from "../entities/database/Game";
import GameRetrievalDTO from "../entities/dto/GameRetrievalDTO";
import ApiResponse from "../entities/api/ApiResponse";
const gameRouter: Router = Router();

gameRouter.get("/", (async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const games: Game[] = await GameService.findAllGames();
    const mappedGames: GameRetrievalDTO[] = games.map(
      (game) => new GameRetrievalDTO(game)
    );
    const statusCode: number = StatusCodes.OK;
    const apiResponse: ApiResponse<GameRetrievalDTO[]> = new ApiResponse<
      GameRetrievalDTO[]
    >(statusCode, mappedGames);
    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

gameRouter.post("/:username", (async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const username: string = request.params.username;
    const newGame: Game = await GameService.insertGame(username);
    const statusCode: number = StatusCodes.CREATED;
    const apiResponse: ApiResponse<Game> = new ApiResponse<Game>(
      statusCode,
      newGame
    );
    response.status(statusCode).json(apiResponse);
  } catch (error: unknown) {
    next(error);
  }
}) as RequestHandler);

export default gameRouter;
