import { Repository } from "typeorm";
import dataSource from "../database";
import { Categories } from "../entities/Categories";
import { Todos } from "../entities/Todos";

interface ITodo {
    name: string;
    description: string;
    user_id: number;
    category_id: number;
}

class CreateTodosService {
    private todoRepository: Repository<Todos>;
    private categoryRepository: Repository<Categories>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todos);
        this.categoryRepository = dataSource.getRepository(Categories);
    }

    public async execute({
        name,
        description,
        user_id,
        category_id,
    }: ITodo): Promise<Todos>{
        if(!name || !description || !user_id || !category_id) {
            throw new Error("Dados incompletos");
        }

        const categoryExists = await this.categoryRepository.findOne({ where:{ id: category_id } });

        if(!categoryExists) {
            throw new Error("Categoria inexistente");
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