import { MongoDB } from "../database/mongodb";
import { QueryRepository } from "../repositories/query.repository";
import {User} from '../models/user.schema'

export class AuthService {
    private database: any
    constructor() {
        this.database = new QueryRepository(new MongoDB());
    }

    async createUser(payload) {
        const createdUser = await this.database.create(User, payload)
        return createdUser
    }

    async getAllUsers() {
        const allUsers = await this.database.findAll(User)
        return allUsers;
    }
    
    postLogin (username: string, password: string) {
        this.database.create('sharan', 'sharan');
        return [true, false]
    }
}