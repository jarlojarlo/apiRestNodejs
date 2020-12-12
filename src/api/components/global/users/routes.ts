import { IComponentRoutes } from "api/components";
import { Router } from "express";
import { UserController } from "./controller";

export class UserRoute implements IComponentRoutes<UserController>{
    
    readonly controller: UserController = new UserController();
    readonly router: Router = Router();
    
    initRoutes(): void {
        this.router.post('/', this.controller.GetUsers);
    }
}