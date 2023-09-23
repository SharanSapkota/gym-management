import { BaseDatabaseInterface } from "../interface/mongo.database";

export class MongoDB implements BaseDatabaseInterface {
    constructor() {}
    create: any = async (model, payload) => {
        const createData = new model(payload);
        const savedResult = await createData.save()
        return savedResult;
    }
    findAll: any = async (model, query = {}) => {
        const findAll = await model.find(query)
        return findAll;
    }
    findOne: any = () => {
        console.log('Method not implemented!')
    }
}