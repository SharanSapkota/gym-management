import { MongoDB } from "../database/mongodb";
import { QueryRepository } from "../repositories/query.repository";

export class AuthService {
    database: any
    constructor() {
        this.database = new QueryRepository(new MongoDB());
    }
    
    postLogin (username: string, password: string) {
        this.database.create('sharan', 'sharan')
    }
}