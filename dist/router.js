"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const estudiante_controller_1 = require("./controllers/estudiante.controller");
const router = (app) => {
    app.post("/estudiantes", estudiante_controller_1.createEstudiante);
    app.get("/estudiantes/:id", estudiante_controller_1.retrieveEstudiante);
    app.put("/estudiantes/:id", estudiante_controller_1.updateEstudiante);
    app.delete("/estudiantes/:id", estudiante_controller_1.deleteEstudiante);
    app.get("/estudiantes", estudiante_controller_1.listEstudiantes);
};
exports.router = router;