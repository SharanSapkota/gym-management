export interface AuthServiceInterface {
    login(req: any, res: any): void;
    signup(username: string, password: string): void;
    createRole(req: any, res: any): void;
}


export interface SignUpInterface {
    signup(username: string, password: string): void
}