
import {User} from '../models/user.schema'
import { Role } from "../models/userRole.schema";
import { userRepository } from "../repositories/user.repository";

export class AuthService {
    private userRepository: any
    constructor() {
        this.userRepository = new userRepository(User);
    }
    async createUser(payload) {
        const createdUser = await this.userRepository.create(User, payload)
        return createdUser
    }

    async getAllUsers() {
        const allUsers = await this.userRepository.findAll(User)
        return allUsers;
    }
    
    postLogin (payload) {
        this.userRepository.create('sharan', 'sharan');
        return [true, false]
    }

    async createRole(payload) {
        const createdRole = await this.userRepository.create(Role, payload);
        return createdRole;
    }

    async getAllRoles(query = {}){
        const getAllRoles = await this.userRepository.findAll(Role, query)
        return getAllRoles;
    } 
}