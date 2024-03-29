import {Request, Router} from 'express';
import { UserController } from '../controllers/user.controller';

const authRouter = Router();
const userController = new UserController();

// authRouter.get('/login', (req: any, res) => userController.login(req, res))
// authRouter.post('/signup', (req, res) => userController.signup(req, res))
// authRouter.get('/getallusers', (req, res) => userController.getAllUsers(req, res))

// // This defines roles route
// authRouter.post('/role', (req, res) => userController.createRole(req, res))
// authRouter.get('/role', (req, res) => userController.getAllRoles(req, res))

export = authRouter;

