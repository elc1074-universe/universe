import UserRetrievalDTO from "../user/UserRetrievalDTO";
import StatementRetrievalDTO from "./StatementRetrievalDTO";
import ResultRetrievalDTO from "./ResultRetrievalDTO";

export default class TestRetrievalDTO {
  id!: number;

  user!: UserRetrievalDTO;

  statements!: StatementRetrievalDTO[];

  isCompleted!: boolean;

  lastCompletedStatementId!: number;

  result!: ResultRetrievalDTO | null;

  createdAt!: string;
}
