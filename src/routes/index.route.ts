import {Router} from 'express';
import userRouter from './user.route';

const app = Router();

app.use('/user', userRouter)

export default app

