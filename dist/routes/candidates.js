"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCandidates = exports.sid = void 0;
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
const getCandidates = async (req, res) => {
    try {
        const list = await (0, candidates_1.getCandidateList)();
        res.status(200).json(list);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
exports.getCandidates = getCandidates;
