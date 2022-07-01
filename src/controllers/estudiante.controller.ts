import { estudianteModel, IEstudiante } from "../models/estudiante.model";
import {Request, Response, NextFunction} from "express";

export const saveEstudiante = async(req: Request, res: Response)=>{
    try{
        const response = await new EstudianteController().save(req);
        return res.status(200).json(response);
    }
    catch(err){
        return res.status(500).json(err);
    }
}




class EstudianteController
{
    public async save(request : Request): Promise<IResponse>{
        const { nombre,cedula,edad,sexo,direccion,celular}= request.body;
        const estudiante = new estudianteModel({ nombre,cedula,edad,sexo,direccion,celular});
        await estudiante.save();
        return {
            message : "Sucess",
            value: "Estudiante added to database"
        };

    }




    public async getAll(): Promise<IEstudiante[]>{
        const data = await  estudianteModel.find({});
        return data;
    }
}