import 'module-alias/register'

import { config } from "dotenv";
config();
import express from 'express'
import { createServer, Server as HttpServer } from "http";
import { Server } from './server';
import { env } from "@config/globals";

(async function main() {
    const app : express.Application = new Server().app;
    const server: HttpServer = createServer(app);

    server.on('listening', ()=>{
        console.log(`server is listening on port ${env.NODE_PORT}`)
    })
})();