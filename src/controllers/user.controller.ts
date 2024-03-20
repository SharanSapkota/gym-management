import { AuthServiceInterface } from "../interface/auth.interface"
import { AuthService } from "../services/auth.service";

export class UserController implements AuthServiceInterface {
    authService: AuthService
    constructor() {
    }

    login(req: Request, res: any): any {
        const { body } = req;
       const [success, error] = this.authService.postLogin(body)
       res.json({success})
    }

    async signup(req, res): Promise<any> {
        try{
            const { body } = req;
            const newSignUp = await this.authService.createUser(body)
            res.status(200).json({data: newSignUp, success: true})
            console.log(`User  signed up.`);
        } catch(error) {
            res.status(400)
        }
    }

    async getAllUsers(req, res): Promise<any> {
       const allUsers = await this.authService.getAllUsers()
        res.json({allUsers})  
    }

    async createRole(req, res) {
        console.log(req.body)
        const { body } = req;
        const addedRole = await this.authService.createRole(body)
        res.status(200).json({data: addedRole, success: true})    
    }

    async getAllRoles(req, res) {
        const getAllRoles = await this.authService.getAllRoles()
        res.status(200).json({data: getAllRoles, success: true})
    }

}

