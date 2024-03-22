import jwt from 'jsonwebtoken'
import config from '../config/index.config'
import { UNAUTHORIZED } from '../constants/httpResponse.constant';

export const jwtVerify = (headers: any) => {
    const token = headers['authorization'];
    jwt.verify(config.secret, token, ((error: any, decoded: any) => {
        if(error) {
            throw new Error(UNAUTHORIZED);
        }
        return decoded;
    }))
}