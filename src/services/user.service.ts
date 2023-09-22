import { MongoDB } from "../database/mongodb";
import { QueryRepository } from "../repositories/query.repository";

export class UserService {
    private database: any;

    constructor() {
        this.database = new QueryRepository(new MongoDB());
    }

    // Create a new user
    async createUser(user: any): Promise<any> {
        try {
            // const newUser = new User(user);
            const savedUser = await this.database.create(user);
            return savedUser;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error; // Handle or log the error as needed
        }
    }

    // Get a user by ID
    async getUserById(userId: string): Promise<any | null> {
        try {
            const user = await this.database.findById(userId);
            return user;
        } catch (error) {
            console.error("Error getting user by ID:", error);
            throw error; // Handle or log the error as needed
        }
    }

    // Add more methods for user-related operations as needed
}
