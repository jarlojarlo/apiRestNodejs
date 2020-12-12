import { bind } from 'decko';
import { NextFunction, Request, Response } from 'express';

export class UserController{
    public async GetUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void>{
        return res.status(200).json({ status: 200, data: 'hello word' });
    }
}