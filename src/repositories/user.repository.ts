import { passwordMatch } from "../adapters/encrytion";
import httpResponse from "../helper/httpResponse";
import { User } from "../models/user.schema";
import { BaseRepository } from "./base.repository";

export class userRepository extends BaseRepository {
    model: any
    constructor(){
        super(User);
        this.model = User;
    }

    async findOne(payload: any) {
        console.log('Method not implemented (Repository)!')
    }

    async login(payload: any) {
        const user = await this.model.findOne({email: payload.email});
        const isPasswordMatch = passwordMatch(payload.password, user.password)
        return isPasswordMatch
    }
}