import { BaseDatabaseInterface } from "../interface/mongo.database";
import mongoose from 'mongoose'

export class MongoDB implements BaseDatabaseInterface {
    create: any = () => {

        // console.log('Method not implemented!')
    }
    find: any = () => {
        console.log('Method not implemented!')
    }
    findOne: any = () => {
        console.log('Method not implemented!')
    }
}