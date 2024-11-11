"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = exports.sid = void 0;
const users_1 = require("../services/users");
const sid = async (req, res) => {
    try {
        await (0, users_1.initDataBase)();
        res.sendStatus(201);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};
exports.sid = sid;
const login = async (req, res) => {
    try {
        const loggedUser = await (0, users_1.userLogin)(req.body);
        res.status(200).json(loggedUser);
    }
    catch (err) {
        res.status(400).json(err.message);
    }
};
exports.login = login;
const register = async (req, res) => {
    try {
        const newUser = await (0, users_1.addUser)(req.body);
        res.status(201).json(newUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};
exports.register = register;
