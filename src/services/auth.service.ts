import { MongoDB } from "../database/mongodb";
import { QueryRepository } from "../repositories/query.repository";
import {User} from '../models/user.schema'
import { Role } from "../models/userRole.schema";

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

    async createRole(payload) {
        const createdRole = await this.database.create(Role, payload);
        return createdRole;
    }

    async getAllRoles(query = {}){
        const getAllRoles = await this.database.findAll(Role, query)
        return getAllRoles;
    } 
}