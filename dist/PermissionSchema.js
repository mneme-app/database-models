"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema } = require("mongoose");
const PermissionSchema = new Schema({
    allRead: { type: Boolean, default: false },
    allWrite: { type: Boolean, default: false },
    usersRead: [
        {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    usersWrite: [
        {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    groupsRead: [
        {
            type: Schema.Types.ObjectId,
            ref: "group",
        },
    ],
    groupsWrite: [
        {
            type: Schema.Types.ObjectId,
            ref: "group",
        },
    ],
});
exports.default = PermissionSchema;
