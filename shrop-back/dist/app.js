"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoConn_1 = __importDefault(require("./config/mongoConn"));
const index_1 = __importDefault(require("./routes/index"));
const cart_1 = __importDefault(require("./routes/cart"));
const product_1 = __importDefault(require("./routes/product"));
const user_1 = __importDefault(require("./routes/user"));
mongoConn_1.default.createConnection();
const app = (0, express_1.default)();
app.set('port', (process.env.PORT || 3000));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use('/', index_1.default);
app.use('/cart', cart_1.default);
app.use('/products', product_1.default);
app.use('/user', user_1.default);
app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
