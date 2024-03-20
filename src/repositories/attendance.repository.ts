import { Attendance } from "../models/attendance.schema";
import { BaseRepository } from "./base.repository";

export class AttendanceRepository extends BaseRepository {
    constructor(){
        super(Attendance);
        this.model = Attendance;
    }

    async findOne(payload: any) {
        console.log('Method not implemented (Repository)!')
    }
 
}