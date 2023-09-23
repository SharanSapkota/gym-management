import {Request, Router} from 'express';
// import { LoginController } from '../../controllers/Login.controller';
import { SignupController } from '../../controllers/SignUp.controller';
import { UserController } from '../../controllers/user.controller';

const authRouter = Router();
const userController = new UserController();
// const signupController = new SignupController()

authRouter.get('/login', (req: any, res) => userController.login(req, res))
authRouter.post('/signup', (req, res) => userController.signup(req, res))
authRouter.get('/getAllUsers', (req, res) => userController.getAllUsers(req, res))



export = authRouter