import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Repository } from "typeorm";
import authConfig from "../config/auth";
import dataSource from "../database";
import { User } from "../entities/User";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: User;
    token: string;
}

export class AuthenticatedUserService {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = dataSource.getRepository(User);
    }
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        
        const user = await this.userRepository.findOne({ where: { email } });

        if( !user ) {
            throw new Error("Incorrect email/passowrd combination");
        }

        const passwordMatched = await compare(password, user.password);

        if( !passwordMatched ) {
            throw new Error("Incorrect email/passowrd combination");
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({ name: user.name, email: user.email }, secret, {
            subject: `${user.id}`,
            expiresIn,
        });

        return { user, token };
    }
}