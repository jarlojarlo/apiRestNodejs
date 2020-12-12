import { Router } from "express";
import { registerApiRoutes } from "./components";

export function initRestRoutes(router: Router){
    const prefix: string = '/api/vq';
    registerApiRoutes(router, prefix);
}