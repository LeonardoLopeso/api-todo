import { hash } from "bcryptjs";
import { Repository } from "typeorm";
import dataSource from "../database";
import { Todos } from "../entities/Todos";

interface ITodo {
    name: string;
    description: string;
    user_id: number;
    category_id: number;
}

class CreateTodosService {
    private todoRepository: Repository<Todos>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todos);
    }

    public async execute({
        name,
        description,
        user_id,
        category_id,
    }: ITodo): Promise<Todos>{
        if(!name || !description) {
            throw new Error("Dados incompletos");
        }

        const todo = this.todoRepository.create({
            name,
            description,
            status: 0,
            user_id,
            category_id
        });

        await this.todoRepository.save(todo);

        return todo;
    }
}

export { CreateTodosService }