import { Request, Response } from 'express';

export class UserController {
    async create( request: Request, response: Response ): Promise<Response> {
        const { nome, email, password } = request.body;

        try {
            console.log("nome: "+nome+",", "email: "+email+",", "password: "+password);            
            return response.status(201).json({ nome, email, password } );
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}