"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { model, models, Schema } = require("mongoose");
const PermissionSchema_js_1 = __importDefault(require("./PermissionSchema.js"));
const QuizSchema = new Schema({
    type: {
        type: String,
        default: "prompt-response",
        enum: {
            values: [
                "prompt-response",
                "multiple-choice",
                "fill-in-the-blank",
                "ordered-list-answer",
                "unordered-list-answer",
                "verbatim",
            ],
            message: "Invalid quiz type",
        },
    },
    prompt: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
    },
    choices: [
        {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 32,
        },
    ],
    correctResponses: [
        {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 32,
        },
    ],
    hints: [
        {
            type: String,
            minLength: 1,
            maxLength: 32,
        },
    ],
    sources: [
        {
            type: Schema.Types.ObjectId,
            ref: "source",
        },
    ],
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "note",
        },
    ],
    contributors: [
        {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    permissions: PermissionSchema_js_1.default,
}, {
    timestamps: true,
});
QuizSchema.set("toJSON", {
    virtuals: true,
});
exports.default = (models === null || models === void 0 ? void 0 : models.quiz) || model("quiz", QuizSchema);
