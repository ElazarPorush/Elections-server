import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers["authorization"]
        if (!token) {
            res.status(401).json({
                err: "Token must be provided"
            })
            return
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).user = payload
        if (!(payload as any).isAdmin){
            res.status(401).json({
                err: "Sorry you are not yet there, a few more years maybe"
            })
        }
        next()
    } catch (err) {
        res.status(401).json(err as JsonWebTokenError)
    }
}