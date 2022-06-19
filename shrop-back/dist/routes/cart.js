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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const redis_1 = require("redis");
const redisConn_1 = __importDefault(require("../config/redisConn"));
var router = express_1.default.Router();
const CART_DATA_FILE = path_1.default.join(__dirname, 'cart-data.json');
router.get('/redis', (req, res) => {
    res.send(redisConn_1.default.createConection());
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const client = redisConn.createConection();
    const newCartProduct = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image_tag: req.body.image_tag,
        quantity: 1
    };
    const client = (0, redis_1.createClient)({
        url: 'redis://default:RedisAdmin69@cache:6379'
    });
    client.on('error', (err) => { console.log(err); });
    yield client.connect();
    // await client.set("key", "value");
    // console.log("connection established");
    // const value = await client.get("key");
    // console.log("value: " + value);
    yield client.set("key", JSON.stringify(newCartProduct));
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
}));
router.delete('/delete', (req, res) => {
    fs_1.default.readFile(CART_DATA_FILE, (err, data) => {
        let cartProducts = JSON.parse(data);
        cartProducts.map((cartProduct) => {
            if (cartProduct.id == req.body.id && cartProduct.quantity > 1) {
                cartProduct.quantity--;
            }
            else if (cartProduct.id == req.body.id && cartProduct.quantity == 1) {
                const cartIndexToRemove = cartProducts.findIndex((cartProduct) => cartProduct.id === req.body.id);
                cartProducts.splice(cartIndexToRemove, 1);
            }
        });
        fs_1.default.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
            res.setHeader('Cache-Control', 'no-cache');
            res.json(cartProducts);
        });
    });
});
router.delete('/delete/all', (req, res) => {
    fs_1.default.readFile(CART_DATA_FILE, () => {
        let emptyCart = [];
        fs_1.default.writeFile(CART_DATA_FILE, JSON.stringify(emptyCart, null, 4), () => {
            res.json(emptyCart);
        });
    });
});
router.get('/', (req, res) => {
    fs_1.default.readFile(CART_DATA_FILE, (err, data) => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});
exports.default = router;
