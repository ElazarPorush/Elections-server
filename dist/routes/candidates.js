"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sid = void 0;
const candidate_1 = require("../services/candidate");
const sid = async (req, res) => {
    try {
        await (0, candidate_1.initDataBase)();
    }
    catch (err) {
        console.log(err);
    }
};
exports.sid = sid;
