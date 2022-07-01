import { Schema,model, Model } from "mongoose";
export interface IEstudiante {
    nombre:     null | string;
    cedula:     null | string;
    sexo:       null | string;
    direccion:  null | string;
    celular:    null | string;
    fechaNacimiento : null | Date;
}
const estudianteSchema = new Schema<IEstudiante>({
    nombre:{type:String},
    cedula: {type:String},
    sexo: {type:String},
    direccion: {type:String},
    celular: {type:String},
    fechaNacimiento : {type:Date}
});
const Estudiante = model<IEstudiante>("Estudiante",estudianteSchema);

export {Estudiante};