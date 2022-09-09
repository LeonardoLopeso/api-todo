import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/categories", categoriesRouter);

export default routes;