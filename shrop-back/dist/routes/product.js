"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
var router = express_1.default.Router();
const PRODUCT_DATA_FILE = path_1.default.join(__dirname, 'article-data.json');
router.get('/', (req, res) => {
    fs_1.default.readFile(PRODUCT_DATA_FILE, (err, data) => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});
exports.default = router;
