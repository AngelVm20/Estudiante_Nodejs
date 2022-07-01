"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEstudiantes = exports.deleteEstudiante = exports.updateEstudiante = exports.retrieveEstudiante = exports.createEstudiante = void 0;
const Estudiante_model_1 = require("../models/estudiante.model");
const createEstudiante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, cedula, sexo, direccion, celular, fechaNacimiento} = req.body;
    const response = yield new EstudianteController().create({ nombre, cedula, sexo, direccion, celular, fechaNacimiento});
    return res.status(response.status).json(response);
});
exports.createEstudiante = createEstudiante;
const retrieveEstudiante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new EstudianteController().retrieve(docId);
    return res.status(response.status).json(response);
});
exports.retrieveEstudiante = retrieveEstudiante;
const updateEstudiante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, cedula, sexo, direccion, celular, fechaNacimiento } = req.body;
    const docId = req.params.id;
    const response = yield new EstudianteController().update(docId, { nombre, cedula, sexo, direccion, celular, fechaNacimiento });
    return res.status(response.status).json(response);
});
exports.updateEstudiante = updateEstudiante;
const deleteEstudiante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new EstudianteController().delete(docId);
    return res.status(response.status).json(response);
});
exports.deleteEstudiante = deleteEstudiante;
const listEstudiantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield new EstudianteController().list();
    return res.status(200).json(response);
});
exports.listEstudiantes = listEstudiantes;
class EstudianteController {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const estudiante = new Estudiante_model_1.Estudiante(payload);
            return estudiante.save().then(data => {
                return {
                    message: "CREATED: Estudiante added to database",
                    status: 201,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "Error on create Estudiante",
                    status: 500,
                    content: err
                };
            });
        });
    }
    retrieve(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Estudiante_model_1.Estudiante.findOne({ _id: docId }).then(data => {
                if (data === null) {
                    return {
                        message: "NOT FOUND: Estudiante not found",
                        status: 404,
                        content: data
                    };
                }
                return {
                    message: "OK: Estudiante retrieve",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: " + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    update(docId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return Estudiante_model_1.Estudiante.updateOne({ _id: docId }, { $set: {
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
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: Estudiante not updated",
                    status: 500,
                    content: err
                };
            });
        });
    }
    delete(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Estudiante_model_1.Estudiante.deleteOne({ _id: docId }).then(data => {
                if (data.deletedCount == 0) {
                    return {
                        message: "NOT FOUND: Estudiante not found",
                        status: 404,
                        content: data
                    };
                }
                return {
                    message: "OK: Estudiante deleted",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: " + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return Estudiante_model_1.Estudiante.find({}).then(data => {
                return {
                    message: "OK: All Estudiantes retrieve",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return { message: "Error on retrieve Estudiantes", status: 500, content: err };
            });
        });
    }
}
