import { Router } from 'express';
import { AuthenticatedUserService } from '../services/AuthenticatedUserService';

const sessionsRouter = Router();

sessionsRouter.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        const authenticateUer = new AuthenticatedUserService();

        const { user, token } = await authenticateUer.execute({
            email,
            password
        });

        delete user.password;

        return res.json({ user, token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

export default sessionsRouter;