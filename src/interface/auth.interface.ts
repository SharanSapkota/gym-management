export interface AuthServiceInterface {
    login(payload: any): void;
}

export interface SignUpInterface {
    signup(username: string, password: string): void
}