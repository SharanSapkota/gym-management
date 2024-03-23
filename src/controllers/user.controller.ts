import { Request, Response } from "express";
import { UserControllerInterface } from "../interface/user.interface";
import { UserService } from "../services/user.service";
import { hashPassword } from "../adapters/encrytion";
import httpResponse from "../helper/httpResponse";

export class UserController implements UserControllerInterface {
    userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async create(req: Request, res: Response) {
        try {
            const { body } = req;
            body.password = await hashPassword(body.password);
            const data = await this.userService.create(body);
            httpResponse.success(res, data);
        } catch(error) {
            httpResponse.errorHandler(res, error);
        }
    }

    async findAll(req: Request, res: Response): Promise<any> {
        try {
            const data = await this.userService.findAll();
            httpResponse.success(res, data);
        } catch(error) {
            httpResponse.badRequest(res, error);
        }
    }

    async login(req: Request, res: Response): Promise<any> {
        try {
            const loggedInUser = await this.userService.login(req.body);
            httpResponse.success(res, loggedInUser);
        } catch(error) {
            httpResponse.badRequest(res, error);
        }
    }
}
