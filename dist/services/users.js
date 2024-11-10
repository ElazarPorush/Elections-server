"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.addUser = exports.initDataBase = void 0;
const bcrypt_1 = require("bcrypt");
const user_1 = __importDefault(require("../models/user"));
const initDataBase = async () => {
    try {
        const users = [
            {
                username: "eli",
                password: "135790"
            },
            {
                username: "eli434",
                password: "342"
            },
            {
                username: "eliahu",
                password: "135790"
            },
        ];
        for (const user of users) {
            const newUser = new user_1.default(user);
            await newUser.save();
        }
    }
    catch (err) {
        console.log("Error accured while creating initial state of users", err);
    }
};
exports.initDataBase = initDataBase;
const addUser = async (user) => {
    try {
        const encPass = await (0, bcrypt_1.hash)(user.password, 10);
        user.password = encPass;
        const newUser = new user_1.default(user);
        return await newUser.save();
    }
    catch (err) {
        throw new Error(`Error accured while creating this user: ${err}`);
    }
};
exports.addUser = addUser;
const userLogin = async (user) => {
    try {
        const userFromDatabase = await user_1.default.findOne({ username: user.username });
        if (!userFromDatabase)
            throw new Error("user not found");
        const match = await (0, bcrypt_1.compare)(user.password, userFromDatabase.password);
        if (!match)
            throw new Error("wrong password");
        return userFromDatabase;
    }
    catch (err) {
        throw err;
    }
};
exports.userLogin = userLogin;
