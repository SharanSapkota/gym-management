import { User } from "../models/user.schema";
import { BaseRepository } from "./base.repository"

export class userRepository extends BaseRepository {
    model: any
    constructor(){
        super(User);
        this.model = User;
    }

    async findOne(payload: any) {
        console.log('Method not implemented (Repository)!')
    }
}