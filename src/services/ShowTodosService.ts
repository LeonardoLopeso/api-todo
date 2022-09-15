import { Repository } from "typeorm";
import dataSource from "../database";
import { Todos } from "../entities/Todos";

interface IRequest {
    id: number;
    user_id: number;
}

class ShowTodosService {
    private todoRepository: Repository<Todos>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todos);
    }

    public async execute({ 
        id, 
        user_id 
    }: IRequest): Promise<Todos>{
        if( !user_id || !id ) {
            throw new Error("Dados incompletos");
        }

        const todo = await this.todoRepository.findOne({
            where: {id},
            relations: ['category', 'user']
        });

        delete todo.user.password;

        return todo;
    }
}

export { ShowTodosService }