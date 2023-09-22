import { SignUpInterface } from "../interface/auth.interface";
import { AuthService } from "../services/auth.service";

export class SignupController implements SignUpInterface {
    public authService

        constructor() {
            this.authService = new AuthService()
    }
    signup(req, res): any {
        const {body} = req;
        this.authService.createUser(body)
        console.log(`User  signed up.`);
    }
}