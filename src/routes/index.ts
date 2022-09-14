import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { usersRouter } from './users.routes';
import { todosRouter } from './todos.routes';

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/categories", categoriesRouter);
routes.use("/todos", todosRouter);

export default routes;