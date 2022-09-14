import { Router } from 'express';
import { TodosController } from '../controllers/TodosController';

export const todosRouter = Router();
const todosController = new TodosController();

todosRouter.post('/', todosController.create);
todosRouter.get('/', todosController.list);
