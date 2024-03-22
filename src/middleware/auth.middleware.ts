import { NextFunction, Request } from "express";
import config from '../config/index.config'
import { UNAUTHORIZED } from "../constants/httpResponse.constant";
import { jwtVerify } from "../helper/jwtHelpter";

export const authenticate = (req: any, res: any, next: NextFunction): any => {
        const user = jwtVerify(req.headers)
        req.user = user;
        next();
}

