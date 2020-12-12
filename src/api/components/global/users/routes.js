"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class UserRoute {
    constructor() {
        this.controller = new controller_1.UserController();
        this.router = express_1.Router();
    }
    initRoutes() {
        this.router.post('/', this.controller.GetUsers);
    }
}
exports.UserRoute = UserRoute;
