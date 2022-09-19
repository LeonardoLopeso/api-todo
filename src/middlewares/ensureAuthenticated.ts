import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
    name: string;
    email: string;
}

export function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error("JWT token is missin");
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        const { sub, name, email } = decoded as ITokenPayload;

        req.user = {
            id: sub,
            name,
            email,
        };

        return next();
    } catch (error) {
        throw new Error("Invalid JWT token");
    }
}