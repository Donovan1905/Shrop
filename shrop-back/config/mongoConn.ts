import mongoose from "mongoose";

const mongoHost = 'mongodb://root:MongoAdmin69@mongo:27017';

export default {
    createConnection:() => {
        mongoose
            .connect(mongoHost)
            .then(() => {
                console.log('connection established');
            })
            .catch((error) => {
                console.log('connection error: ' + error);
                process.exit(1);
            });
    }
}
