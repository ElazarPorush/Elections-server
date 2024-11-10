"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDataBase = void 0;
const candidate_1 = __importDefault(require("../models/candidate"));
const initDataBase = async () => {
    try {
        const cands = [
            {
                name: "John",
                image: "https://randomuser.me/api/portraits/med/men/81.jpg",
            },
            {
                name: "Johnny",
                image: "https://randomuser.me/api/portraits/med/men/13.jpg",
            },
            {
                name: "Johnnyiahoo",
                image: "https://randomuser.me/api/portraits/med/men/83.jpg",
            },
            {
                name: "Johnniel",
                image: "https://randomuser.me/api/portraits/med/men/0.jpg",
            },
            {
                name: "Johnny",
                image: "https://randomuser.me/api/portraits/med/men/6.jpg",
            },
        ];
        for (const cand of cands) {
            const newCand = new candidate_1.default(cand);
            await newCand.save();
        }
    }
    catch (err) {
        console.log("Error accured while creating initial state of candidates", err);
    }
};
exports.initDataBase = initDataBase;
