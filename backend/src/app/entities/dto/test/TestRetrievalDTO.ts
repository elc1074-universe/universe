import Test from '../../database/Test';
import UserRetrievalDTO from '../user/UserRetrievalDTO';
import StatementRetrievalDTO from './StatementRetrievalDTO';
import ResultRetrievalDTO from './ResultRetrievalDTO';
import TestService from '../../../services/TestService';
import TestStatementService from '../../../services/TestStatementService';

export default class TestRetrievalDTO {

  id: number;

  user: UserRetrievalDTO;

  statements: StatementRetrievalDTO[];

  isCompleted: boolean;

  result: ResultRetrievalDTO | null;

  createdAt: string;

  private constructor(
    test: Test,
    statements: StatementRetrievalDTO[],
    isCompleted: boolean,
    result: ResultRetrievalDTO | null
  ) {
    this.id = test.id;
    this.user = new UserRetrievalDTO(test.user);
    this.statements = statements;
    this.isCompleted = isCompleted;
    this.result = result;
    this.createdAt = test.createdAt.toLocaleString('pt-BR');
  }

  static async create(test: Test): Promise<TestRetrievalDTO> {
    const rawStatements = await TestStatementService.findByUserCode(test.user.code);
    const mappedStatements = await Promise.all(rawStatements.map(rawStatement => StatementRetrievalDTO.create(rawStatement)));

    const isCompleted = await TestService.isCompleted(test.user.code);

    let result = null;

    if (isCompleted) {
      result = await ResultRetrievalDTO.create(await TestService.getResult(test.user.code));
    }

    return new TestRetrievalDTO(test, mappedStatements, isCompleted, result);
  }
};
