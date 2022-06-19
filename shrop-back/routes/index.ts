import express, { Request, Response, NextFunction, Router } from 'express';
import { verifyToken} from '../middleware/auth';

var router: Router = express.Router();


router.get('/', verifyToken, (req: Request, res) => {
    res.status(200).send('Welcome');
});
    
export default router;
    