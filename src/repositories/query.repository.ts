export class QueryRepository {
    model: any
    constructor(model: any){
        this.model = model
    }

    async create(model, payload: any) {
        return await this.model.create(model, payload)
    }
    async findOne(payload: any) {
        console.log('Method not implemented (Repository)!')
    }
    async findAll(model, query = {}) {
       const findAll = await this.model.findAll(model, query)
       return findAll;
    }
}