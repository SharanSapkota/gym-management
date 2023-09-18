import { SignUpInterface } from "../../interface/auth.interface";

export class SignupController implements SignUpInterface {
    constructor() {
    }
    signup(username: string, password: string): void {
        console.log(`User ${username} signed up.`);
    }
}