import { Repository } from "typeorm";
import dataSource from "../database";
import { Todos } from "../entities/Todos";

class ListTodosService {
    private todoRepository: Repository<Todos>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todos);
    }

    public async execute(): Promise<Todos[]>{

        const todos = await this.todoRepository.find({
            relations: ['user','category']
        });

        return todos;
    }
}

export { ListTodosService }