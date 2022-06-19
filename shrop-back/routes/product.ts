import express, { Request, Response, NextFunction, Router } from 'express';
import fs from 'fs';
import path from 'path';

var router: Router = express.Router();

const PRODUCT_DATA_FILE = path.join(__dirname, 'article-data.json');

router.get('/', (req, res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err, data: any) => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
    });
    
export default router;
    