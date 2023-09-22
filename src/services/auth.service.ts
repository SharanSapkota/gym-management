import { MongoDB } from "../database/mongodb";
import { QueryRepository } from "../repositories/query.repository";

export class AuthService {
    private database: any
    constructor() {
        this.database = new QueryRepository(new MongoDB());
    }

    createUser(payload) {
        this.database.create(payload)
        // console.log(payload) 
    }
    
    postLogin (username: string, password: string) {
        this.database.create('sharan', 'sharan');
        return [true, false]
    }
}