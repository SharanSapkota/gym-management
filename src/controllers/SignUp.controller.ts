import { Request } from "express";
import { SignUpInterface } from "../interface/auth.interface";
import { AuthService } from "../services/auth.service";

export class SignupController implements SignUpInterface {
    public authService

        constructor() {
            this.authService = new AuthService()
    }
    signup() {
        return 'Method not implemented!'
    }
}