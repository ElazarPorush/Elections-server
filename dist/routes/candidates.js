"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCandidate = exports.sid = void 0;
const candidates_1 = require("../services/candidates");
const sid = async (req, res) => {
    try {
        await (0, candidates_1.initDataBase)();
        res.sendStatus(201);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};
exports.sid = sid;
const getCandidate = async (req, res) => {
    try {
        const list = await (0, candidates_1.getCandidateList)();
        res.send({
            data: list,
            success: true
        });
    }
    catch (err) {
        res.send({
            data: null,
            success: false,
            error: err
        });
    }
};
exports.getCandidate = getCandidate;
