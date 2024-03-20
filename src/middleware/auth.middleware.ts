import { NextFunction, Request } from "express";
import config from '../config/index.config'
import jwt from 'jsonwebtoken'
import { UNAUTHORIZED } from "../constants/httpResponse.constant";

export const authenticate = (req: any, res: any, next: NextFunction): any => {
    const token = req.headers['authorization'];
    jwt.verify(config.secret, token, ((error: any, decoded: any) => {
        if(error) {
            throw new Error(UNAUTHORIZED);
        }

        req.user = decoded;

        next();
    }))
}