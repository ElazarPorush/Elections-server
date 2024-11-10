"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candidates_1 = require("../routes/candidates");
const router = (0, express_1.Router)();
router.post("/sid", candidates_1.sid);
exports.default = router;
