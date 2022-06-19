"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoHost = 'mongodb://root:MongoAdmin69@mongo:27017';
exports.default = {
    createConnection: () => {
        mongoose_1.default
            .connect(mongoHost)
            .then(() => {
            console.log('connection established');
        })
            .catch((error) => {
            console.log('connection error: ' + error);
            process.exit(1);
        });
    }
};
