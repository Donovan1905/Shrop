import express,  { Request, Response, NextFunction, Router } from 'express';
import fs from 'fs';
import path from 'path';
import redis, { createClient} from 'redis';

import redisConn from '../config/redisConn';

var router: Router = express.Router();

const CART_DATA_FILE = path.join(__dirname, 'cart-data.json');

router.get('/redis', (req, res) => {
    res.send(redisConn.createConection())
});

router.post('/', async (req, res) => {
    // const client = redisConn.createConection();
    const newCartProduct = { 
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image_tag: req.body.image_tag, 
        quantity: 1 
      };
    const client = createClient({
        url: 'redis://default:RedisAdmin69@cache:6379'
    });
    client.on('error', (err) => { console.log(err); });

    await client.connect();

    // await client.set("key", "value");
    // console.log("connection established");
    // const value = await client.get("key");
    // console.log("value: " + value);
    await client.set("key", JSON.stringify(newCartProduct));
    // await client.json.set("1", '.', newCartProduct)

    res.send('add to cart');

    // fs.readFile(CART_DATA_FILE, (err, data: any) => {
    //   const cartProducts = JSON.parse(data);
    //   const newCartProduct = { 
    //     id: req.body.id,
    //     title: req.body.title,
    //     description: req.body.description,
    //     price: req.body.price,
    //     image_tag: req.body.image_tag, 
    //     quantity: 1 
    //   };
    //   let cartProductExists = false;
    //   cartProducts.map((cartProduct: any) => {
    //     if (cartProduct.id === newCartProduct.id) {
    //       cartProduct.quantity++;
    //       cartProductExists = true;
    //     }
    //   });
    //   if (!cartProductExists) cartProducts.push(newCartProduct);
    //   fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
    //     res.setHeader('Cache-Control', 'no-cache');
    //     res.json(cartProducts);
    //   });
    // });
  });

router.delete('/delete', (req, res) => {
fs.readFile(CART_DATA_FILE, (err, data: any) => {
    let cartProducts: any = JSON.parse(data);
    cartProducts.map((cartProduct: any) => {
    if (cartProduct.id == req.body.id && cartProduct.quantity > 1) {
        cartProduct.quantity--;
    } else if (cartProduct.id == req.body.id && cartProduct.quantity == 1) {
        const cartIndexToRemove = cartProducts.findIndex((cartProduct: any) => cartProduct.id === req.body.id);
        cartProducts.splice(cartIndexToRemove, 1);
    }
    });
    fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(cartProducts);
    });
});
});

router.delete('/delete/all', (req, res) => {
    fs.readFile(CART_DATA_FILE, () => {
      let emptyCart: Array<any> = [];
      fs.writeFile(CART_DATA_FILE, JSON.stringify(emptyCart, null, 4), () => {
        res.json(emptyCart);
      });
    });
  });

router.get('/', (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data: any) => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});

export default router;