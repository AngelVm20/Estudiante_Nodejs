"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estudianteModel = void 0;
const mongoose_1 = require("mongoose");
const estudianteSchema = new mongoose_1.Schema({
    nombre: { type: String },
    cedula: { type: String },
    edad: { type: Number },
    sexo: { type: String },
    direccion: { type: String },
    celular: { type: String }
});
const estudianteModel = (0, mongoose_1.model)("estudianteModel", estudianteSchema);
exports.estudianteModel = estudianteModel;
