export interface BaseDatabaseInterface {
    create: Promise<any>,
    findOne: Promise<any>,
    find: Promise<any>
}