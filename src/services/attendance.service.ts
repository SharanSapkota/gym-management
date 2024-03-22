
import {User} from '../models/user.schema'
import { Role } from "../models/userRole.schema";
import { AttendanceRepository } from '../repositories/attendance.repository';
import { BaseService } from './base.service';

export class AuthService extends BaseService {
    private attendanceRepository: any
    constructor() {
        super(new AttendanceRepository())
        this.attendanceRepository = new AttendanceRepository();
    }
    async create(payload: any) {
        const createdUser = await this.attendanceRepository.create(User, payload)
        return createdUser
    }

    async getAll() {
        const allUsers = await this.attendanceRepository.findAll(User)
        return allUsers;
    }
}

