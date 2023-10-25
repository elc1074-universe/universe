export default class TestStatementSavingDTO {

  statementId: number;

  selectedOptionId: number;

  constructor(statementId: number, selectedOptionId: number) {
    this.statementId = statementId;
    this.selectedOptionId = selectedOptionId;
  }
};
