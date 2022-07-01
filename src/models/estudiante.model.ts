import { Schema,model, Model } from "mongoose";
export interface IEstudiante {
    nombre:string;
    cedula: string;
    edad: number;
    sexo: string;
    direccion: string;
    celular: string;
    fechaNacimiento : Date;
}
const estudianteSchema = new Schema<IEstudiante>({
    nombre:{type:String},
    cedula: {type:String},
    edad: {type:Number},
    sexo: {type:String},
    direccion: {type:String},
    celular: {type:String},
    fechaNacimiento : {type:Date}
});
const estudianteModel = model<IEstudiante>("estudianteModel",estudianteSchema);

export {estudianteModel};