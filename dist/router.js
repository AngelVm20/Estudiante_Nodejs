"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const default_controller_1 = require("./controllers/default.controller");
function routes(server) {
    server.get("/hello", default_controller_1.HelloWorld);
}
exports.routes = routes;
