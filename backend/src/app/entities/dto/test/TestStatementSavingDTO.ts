export default class TestStatementSavingDTO {

  userCode: string;

  statementId: number;

  selectedOptionId: number;

  constructor(userCode: string, statementId: number, selectedOptionId: number) {
    this.userCode = userCode;
    this.statementId = statementId;
    this.selectedOptionId = statementId * 2 + selectedOptionId - 2;
  }
};
