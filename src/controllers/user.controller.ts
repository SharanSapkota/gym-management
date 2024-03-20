import { AuthServiceInterface } from "../interface/auth.interface"
import { UserControllerInterface } from "../interface/user.interface";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

export class UserController implements UserControllerInterface {
    authService: UserService
    constructor() {
    }

    async create(req, res): Promise<any> {
        try {
            const { body } = req;
            const newSignUp = await this.authService.create(body)
            res.status(200).json({data: newSignUp, success: true})
            console.log(`User  signed up.`);
        } catch(error) {
            res.status(400)
        }
    }

    async findAll(req, res): Promise<any> {
        try{
            const allUsers = await this.authService.findAll()
            res.json({allUsers})  
        } catch(error) {
            res.status(400)
        }
    }


}

