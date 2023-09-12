"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { model, models, Schema } = require("mongoose");
const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 1,
        maxLength: 100,
    },
    description: {
        type: String,
        minLength: 2,
        maxLength: 512,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    admins: [
        {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    isPublic: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.default = (models === null || models === void 0 ? void 0 : models.group) || model("group", GroupSchema);
