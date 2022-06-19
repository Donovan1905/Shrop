import express, { Express, Request, Response, NextFunction, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import redis from 'redis';
import mongoConn from './config/mongoConn';


import indexRouter from './routes/index';
import cartRouter from './routes/cart';
import productRouter from './routes/product';
import userRouter from './routes/user';

mongoConn.createConnection();

const app: Express = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: '*'
}))

app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/products', productRouter);
app.use('/user', userRouter);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
