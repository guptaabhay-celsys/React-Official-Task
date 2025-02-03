import { AppDataSource } from '../db.config'; 
import { Users } from '../entities/userEntity';  
import { Repository } from 'typeorm';

export class UserService {
    private userRepo: Repository<Users>;

    constructor() {
        this.userRepo = AppDataSource.getRepository(Users);
    }

    async createUser({ name, email, password }: Partial<Users>) {
        const user = this.userRepo.create({ name, email, password });
        return await this.userRepo.save(user);
    }

    async findUser({ email }: { email: string }) {
        return await this.userRepo.findOne({ where: { email } });
    }
}
