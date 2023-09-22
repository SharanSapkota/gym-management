export class QueryRepository {
    db: any
    constructor(db: any){
        this.db = db
    }

    async create(payload: any) {
        console.log('method not implemented')
        console.log(payload)
        // this.db.create()
    }
    async findOne(payload: any) {
        console.log('Method not implemented (Repository)!')
    }
    async find(payload: any) {
        console.log('Method not implemented (Repository)!')
    }
}