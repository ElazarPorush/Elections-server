"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongo = void 0;
const mongoose_1 = require("mongoose");
const connectToMongo = async () => {
    try {
        (0, mongoose_1.connect)(process.env.DB_URL);
        console.log(`connected to mongo`);
    }
    catch (err) {
        console.log("can't connect to mongo", err);
    }
};
exports.connectToMongo = connectToMongo;
