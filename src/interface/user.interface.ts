import { BaseControllerInterface, BaseServiceInterface } from "./base.interface";

export interface UserServiceInterface extends BaseServiceInterface {
    create(payload): Promise<any>;
}

export interface UserControllerInterface extends BaseControllerInterface {

}