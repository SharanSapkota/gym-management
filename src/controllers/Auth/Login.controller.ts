import { AuthServiceInterface } from "../../interface/auth.interface";
import { AuthService } from "../../services/auth.service";

export class LoginController implements AuthServiceInterface {
    authService = new AuthService()
    constructor() {
    }

    login(payload: any) {
        this.authService.postLogin('sharan', 'sharan')
    }
}