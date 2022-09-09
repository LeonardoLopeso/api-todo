import { Request, Response } from 'express';
import { CreateCategoriesService } from '../services/CreateCategoriesService';

export class CategoriesController {
    async create( request: Request, response: Response ): Promise<Response> {
        const { name, color } = request.body;

        try {
            const createCategoriesService = new CreateCategoriesService();
            const categorie = await createCategoriesService.execute({name, color});
            return response.status(201).json(categorie);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}