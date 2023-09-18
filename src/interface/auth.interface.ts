export interface AuthServiceInterface {
    login(req: any, res: any): void;
}

export interface SignUpInterface {
    signup(username: string, password: string): void
}