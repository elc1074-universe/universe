export class User {
    id: number;
    code: string;
    username: string;
    email: string;
    createdAt: Date;
  
    constructor(id: number, code: string, username: string, email: string, createdAt: Date) {
      this.id = id;
      this.code = code;
      this.username = username;
      this.email = email;
      this.createdAt = createdAt;
    }
}