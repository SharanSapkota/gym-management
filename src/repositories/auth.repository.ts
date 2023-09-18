export class AuthRepository {
    private readonly db: any
    async create(payload: any) {
        return this.db.create({payload})
    }
}