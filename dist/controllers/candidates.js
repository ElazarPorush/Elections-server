"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candidates_1 = require("../routes/candidates");
const verifyUser_1 = __importDefault(require("../middlewares/verifyUser"));
const router = (0, express_1.Router)();
router.post("/sid", candidates_1.sid);
router.get("/", verifyUser_1.default, candidates_1.getCandidates);
exports.default = router;
