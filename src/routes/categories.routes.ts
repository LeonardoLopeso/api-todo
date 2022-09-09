import { Router } from 'express';
import { CategoriesController } from '../controllers/CategoriesController';

export const categoriesRouter = Router();
const categoriesController = new CategoriesController();

categoriesRouter.post('/', categoriesController.create);
