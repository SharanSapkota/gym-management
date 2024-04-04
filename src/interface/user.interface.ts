import { BaseControllerInterface, BaseServiceInterface } from "./base.interface";

export interface UserServiceInterface extends BaseServiceInterface {
    create(payload: any): Promise<any>;
}

export interface UserControllerInterface extends BaseControllerInterface {

}