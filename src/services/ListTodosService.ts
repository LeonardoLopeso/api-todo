import { Repository } from "typeorm";
import dataSource from "../database";
import { Todos } from "../entities/Todos";

interface IRequest {
    user_id: number;
}

class ListTodosService {
    private todoRepository: Repository<Todos>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todos);
    }

    public async execute({ user_id }: IRequest): Promise<Todos[]>{

        const todos = await this.todoRepository.find({
            where: {
                user_id
            },
            relations: ['category']
        });

        return todos;
    }
}

export { ListTodosService }