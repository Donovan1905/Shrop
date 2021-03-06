"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jwt = require('jsonwebtoken');
const TOKEN_KEY = "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";
const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send("Token is required");
    }
    try {
        const decoded = jwt.verify(token, TOKEN_KEY);
        req.user = decoded;
    }
    catch (err) {
        return res.status(401).send('Invalid token');
    }
    return next();
};
exports.verifyToken = verifyToken;
// export default verifyToken;
