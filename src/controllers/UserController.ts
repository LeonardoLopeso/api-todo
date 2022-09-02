import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

export class UserController {
    async create( request: Request, response: Response ): Promise<Response> {
        const { nome, email, password } = request.body;

        try {
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({nome, email, password});
            return response.status(201).json({ nome, email, password } );
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}