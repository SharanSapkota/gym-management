export interface BaseDatabaseInterface {
    create: Promise<any>,
    findOne: Promise<any>,
    findAll: Promise<any>
}