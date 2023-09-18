import { NextFunction, Request } from "express";
import config from '../config/index.config'

export const authenticate = (req: Request, res: any, next: NextFunction): any => {
    next();
}