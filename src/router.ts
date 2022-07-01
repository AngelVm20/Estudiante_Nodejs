import {Application} from 'express';
import { createEstudiante, deleteEstudiante, listEstudiantes, retrieveEstudiante, updateEstudiante } from './controllers/estudiante.controller';

export const router = (app: Application)=>{
    app.post("/estudiantes", createEstudiante);  
    app.get("/estudiantes/:id", retrieveEstudiante);
    app.put("/estudiantes/:id", updateEstudiante);
    app.delete("/estudiantes/:id", deleteEstudiante);    
    app.get("/estudiantes", listEstudiantes);
}