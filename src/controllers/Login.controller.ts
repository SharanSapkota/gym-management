import { AuthServiceInterface } from "../interface/auth.interface";
import { AuthService } from "../services/auth.service";

export class LoginController implements AuthServiceInterface {
    authService = new AuthService()
    constructor() {
    }

    login(req: Request, res: any): any {
       const [success, error] = this.authService.postLogin('sharan', 'sharan')
       res.json({success})
    }
}