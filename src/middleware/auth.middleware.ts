import { NextFunction, Request } from "express";
import { jwtVerify } from "../helper/jwtHelpter";
import httpResponse from "../helper/httpResponse";

export const authenticate = (req: any, res: any, next: NextFunction): any => {
        const authorization = req.headers?.authorization;
        if(!authorization) {
            httpResponse.unAuthorized(res, {})
        }
        const user = jwtVerify(req.headers)
        req.user = user;
        next();
}

