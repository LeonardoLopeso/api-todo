import { Request, Response } from 'express';
import { CreateTodosService } from '../services/CreateTodosService';
import { ListTodosService } from '../services/ListTodosService';
import { ShowTodosService } from '../services/ShowTodosService';

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
        const { user_id } = request.body;
        try {
            const listTodosService = new ListTodosService();
            const todo = await listTodosService.execute({user_id});
            return response.status(200).json(todo);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async show( request: Request, response: Response ): Promise<Response> {
        const { user_id } = request.body;
        const { id } = request.params;
        try {
            const showTodosService = new ShowTodosService();
            const todo = await showTodosService.execute({ id: Number(id), user_id });
            return response.status(200).json(todo);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}