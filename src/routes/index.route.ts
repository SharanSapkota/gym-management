import {Router} from 'express';
import authRouter from './auth/auth.route';

const app = Router();

app.use('/user', authRouter)

export default app

