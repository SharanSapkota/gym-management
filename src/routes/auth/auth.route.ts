import {Request, Router} from 'express';
import { LoginController } from '../../controllers/Login.controller';
import { SignupController } from '../../controllers/SignUp.controller';

const authRouter = Router();
const loginController = new LoginController();
const signupController = new SignupController()

authRouter.get('/login', (req: any, res) => loginController.login(req, res))
authRouter.post('/signup', (req, res) => signupController.signup(req, res))

export = authRouter