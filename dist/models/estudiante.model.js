"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const mongoose_1 = require("mongoose");
const estudianteSchema = new mongoose_1.Schema({
    nombre: { type: String },
    cedula: { type: String },
    sexo: { type: String },
    direccion: { type: String },
    celular: { type: String },
    fechaNacimiento : {type: Date}
});
const Estudiante = (0, mongoose_1.model)("Estudiante", estudianteSchema);
exports.Estudiante = Estudiante;
