export class BaseRepository {
    model: any
    constructor(model: any){
        this.model = model
    }

    async create(payload: any) {
        const createData = new this.model(payload);
        const savedResult = await createData.save()
        return savedResult;
    }

    async findAll(model: any, query = {}) {
        const findAll = await this.model.findAll(model, query)
        return findAll;
     }
}