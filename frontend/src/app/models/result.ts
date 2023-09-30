export class Result {
    id: number;
    userCode: string;
    rScore: number;
    iScore: number;
    aScore: number;
    sScore: number;
    eScore: number;
    cScore: number;
    interestCode: string;
    createdAt: Date;
  
    constructor(
      id: number,
      userCode: string,
      rScore: number,
      iScore: number,
      aScore: number,
      sScore: number,
      eScore: number,
      cScore: number,
      interestCode: string,
      createdAt: Date
    ) {
      this.id = id;
      this.userCode = userCode;
      this.rScore = rScore;
      this.iScore = iScore;
      this.aScore = aScore;
      this.sScore = sScore;
      this.eScore = eScore;
      this.cScore = cScore;
      this.interestCode = interestCode;
      this.createdAt = createdAt;
    }
  }
  