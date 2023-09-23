export class QueryRepository {
    db: any
    constructor(db: any){
        this.db = db
    }

    async create(model, payload: any) {
        return await this.db.create(model, payload)
    }
    async findOne(payload: any) {
        console.log('Method not implemented (Repository)!')
    }
    async findAll(model, query = {}) {
       const findAll = await this.db.findAll(model, query)
       return findAll;
    }
}