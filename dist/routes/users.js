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
        await (0, users_1.userLogin)(req.body);
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};
exports.login = login;
const register = async (req, res) => {
    try {
        const newUser = await (0, users_1.addUser)(req.body);
        res.send({
            data: newUser,
            error: false
        });
    }
    catch (err) {
        console.log(err);
        res.send({
            data: null,
            error: err
        });
    }
};
exports.register = register;
