import { Request, Response } from 'express';
import { CreateTodosService } from '../services/CreateTodosService';
import { ListTodosService } from '../services/ListTodosService';

export class TodosController {
    async create( request: Request, response: Response ): Promise<Response> {
        const { name, description, category_id, user_id } = request.body;

        try {
            const createTodosService = new CreateTodosService();
            const todo = await createTodosService.execute({name, description, category_id, user_id});
            return response.status(201).json(todo);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async list( request: Request, response: Response ): Promise<Response> {

        try {
            const createTodosService = new ListTodosService();
            const todo = await createTodosService.execute();
            return response.status(201).json(todo);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}