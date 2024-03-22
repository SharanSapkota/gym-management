import { User } from "../models/user.schema";
import { userRepository } from "../repositories/user.repository";
import { BaseService } from "./base.service";

interface IUserService {
    create(user: any): Promise<any>;
    getById(userId: string): Promise<any>;
};

export class UserService extends BaseService implements IUserService {
    private userRepository: any;

    constructor() {
        super(new userRepository())
        this.userRepository = new userRepository();
    }

    async create(user: any): Promise<any> {
        const savedUser = await this.userRepository.create(user);
        return savedUser;
    }

    async getById(userId: string): Promise<any | null> {
        const user = await this.userRepository.findById(userId);
        return user;
    }

}
