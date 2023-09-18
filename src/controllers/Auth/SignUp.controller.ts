import { SignUpInterface } from "../../interface/auth.interface";

export class SignupController implements SignUpInterface {
        constructor() {
    }
    signup(): any {
        console.log(`User  signed up.`);
    }
}