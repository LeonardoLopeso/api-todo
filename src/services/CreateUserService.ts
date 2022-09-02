
interface IUser {
    nome: string;
    email: string;
    password: string;
}

class CreateUserService {
    private users = <IUser[]>[];

    public async execute({
        nome,
        email,
        password
    }: IUser): Promise<IUser[]>{
        if(!nome || !email || !password) {
            throw new Error("Dados incompletos");
        }

        this.users.push({nome, email, password});

        return this.users;
    }
}

export { CreateUserService }