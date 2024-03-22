
import {User} from '../models/user.schema'
import { Role } from "../models/userRole.schema";
import { userRepository } from "../repositories/user.repository";

export class AuthService {
    private userRepository: any
    constructor() {
        this.userRepository = new userRepository();
    }
    
    postLogin (payload: any) {
        this.userRepository.create('sharan', 'sharan');
        return [true, false]
    }
}