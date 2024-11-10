"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const candidateSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true
    },
    image: String,
    voted: {
        type: Number,
        default: null
    },
});
exports.default = (0, mongoose_1.model)("Candidate", candidateSchema);
