import { AuthServiceInterface } from "../interface/auth.interface"
import { AuthService } from "../services/auth.service";

export class UserController implements AuthServiceInterface {
    authService = new AuthService()
    constructor() {
    }

    login(req: Request, res: any): any {
       const [success, error] = this.authService.postLogin('sharan', 'sharan')
       res.json({success})
    }
    signup(req, res): any {
        const {body} = req;
        this.authService.createUser(body)
        console.log(`User  signed up.`);
    }
    async getAllUsers(req, res): Promise<any> {
       const allUsers = await this.authService.getAllUsers()
        res.json({allUsers})  
  }
}