import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { usersRouter } from './users.routes';
import { todosRouter } from './todos.routes';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/categories", categoriesRouter);
routes.use("/todos", ensureAuthenticated, todosRouter);
routes.use("/sessions", sessionsRouter);

export default routes;