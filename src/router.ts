import { Application } from "express";
import { HelloWorld } from "./controllers/default.controller";
import { saveEstudiante } from "./controllers/estudiante.controller";
export function routes(server:Application){
    server.get("/hello",HelloWorld);
    server.post('/estudiante',saveEstudiante);
}