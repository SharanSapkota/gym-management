import { Request, Response } from "express";

export interface BaseServiceInterface {
    getAll: Promise<any>;
}

export interface BaseControllerInterface {
    create(req: Request, res: Response): Promise<any>;
}