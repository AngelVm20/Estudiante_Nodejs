import { Request, Response } from 'express';
import { Estudiante, IEstudiante } from '../models/estudiante.model';
import { IResponse } from '../models/response.mode';

export const createEstudiante = async (req: Request, res: Response)=> {           
    const { nombre, cedula, sexo, direccion, celular, fechaNacimiento } : IEstudiante = req.body;
    const response = await new EstudianteController().create({ nombre, cedula, sexo, direccion, celular, fechaNacimiento});         
    return res.status(response.status).json(response);   
}

export const retrieveEstudiante = async (req: Request, res: Response) => {
    const docId : String = req.params.id; 
    const response = await new EstudianteController().retrieve(docId);         
    return res.status(response.status).json(response);   
 }

 export const updateEstudiante = async (req: Request, res: Response)=> {           
    const { nombre, cedula, sexo, direccion, celular, fechaNacimiento } : IEstudiante = req.body;
    const docId : String = req.params.id; 
    const response = await new EstudianteController().update(docId, { nombre, cedula, sexo, direccion, celular, fechaNacimiento});         
    return res.status(response.status).json(response);   
}

export const deleteEstudiante = async (req: Request, res: Response) => {
    const docId : String = req.params.id; 
    const response = await new EstudianteController().delete(docId);         
    return res.status(response.status).json(response);   
 }

 export const listEstudiantes = async (req: Request, res: Response) => {
    const response = await new EstudianteController().list();         
    return res.status(200).json(response);    
}


class EstudianteController{

    public async create(payload : IEstudiante) : Promise<IResponse> {
        const estudiante = new Estudiante(payload);
        return estudiante.save().then(data => {
            return {
                message: "CREATED: Estudiante added to database",
                status: 201,
                content : data
            }
        }).catch(err => {
            return {
                message: "Error on create Estudiante",
                status: 500,
                content : err
            }
        });        
    }

    public async retrieve(docId: String) : Promise<IResponse> {        
        return Estudiante.findOne({_id: docId}).then(data => {
            if(data === null) {
                return {
                    message: "NOT FOUND: Estudiante not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "OK: Estudiante retrieve",
                status: 200,
                content : data
            };
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name ,
                status: 500,
                content : err
            };
        });        
    }
    
    public async update(docId: String, payload : IEstudiante) : Promise<IResponse>{
        return Estudiante.updateOne({_id: docId} , { $set: { 
            nombre: payload.nombre, 
            cedula: payload.cedula, 
            sexo: payload.sexo, 
            direccion: payload.direccion, 
            celular: payload.celular,
            fechaNacimiento: payload.fechaNacimiento
          } }).then(data => {            
            return {
                message: "OK: Estudiante updated",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: Estudiante not updated",
                status: 500,
                content : err
            }
        });
    }

    public async delete(docId: String) : Promise<IResponse> {
        return Estudiante.deleteOne({_id: docId}).then(data => {
            if (data.deletedCount == 0) {
                return {
                    message: "NOT FOUND: Estudiante not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "OK: Estudiante deleted",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name,
                status: 500,
                content : err
            }
        });
    }

    public async list() : Promise<IResponse> {
        return Estudiante.find({}).then(data => {
                return {
                    message: "OK: All Estudiantes retrieve",
                    status: 200,
                    content : data
                };
            }).catch(err => {
                return { message: "Error on retrieve Estudiantes", status: 500, content : err }
        });       
    }
}