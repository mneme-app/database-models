"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { model, models, Schema } = require("mongoose");
const NotificationSchema_js_1 = __importDefault(require("./NotificationSchema.js"));
// This is for tracking progress on quiz questions
// and spaced repetition (Leitner method)
const TQuiz = new Schema({
    quizId: {
        type: Schema.Types.ObjectId,
        ref: "quiz",
        required: true,
    },
    lastCorrect: {
        type: Date,
    },
    level: {
        type: Number,
        default: 0,
    },
    hiddenUntil: {
        type: Date,
    },
});
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 32,
    },
    displayName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 32,
    },
    avatar: {
        type: String,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    refreshTokens: {
        type: [String],
        default: [],
    },
    associates: [
        {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    groups: [
        {
            type: Schema.Types.ObjectId,
            ref: "group",
        },
    ],
    quizzes: [TQuiz],
    lastLogin: {
        type: Date,
    },
    notifications: [NotificationSchema_js_1.default],
    isPublic: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
UserSchema.set("toJSON", {
    virtuals: true,
});
exports.default = (models === null || models === void 0 ? void 0 : models.user) || model("user", UserSchema);
