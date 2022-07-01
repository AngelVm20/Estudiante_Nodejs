"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URI = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || 3000;
exports.MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/estudiantedb";
