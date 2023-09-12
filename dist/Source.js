"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PermissionSchema_js_1 = __importDefault(require("./PermissionSchema.js"));
const { model, models, Schema } = require("mongoose");
//  validation:
//  need either lastAccessed or publishDate
//  url to match http format
const SourceSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
    },
    authors: [
        {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 100,
        },
    ],
    medium: {
        type: String,
        enum: {
            values: ["book", "article", "video", "podcast", "website"],
            message: "Invalid medium",
        },
    },
    url: {
        type: String,
    },
    tags: [
        {
            type: String,
            minLength: 1,
            maxLength: 16,
        },
    ],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    publishedAt: {
        type: Date,
    },
    lastAccessed: {
        type: Date,
    },
    permissions: PermissionSchema_js_1.default,
}, {
    timestamps: true,
});
SourceSchema.set("toJSON", {
    virtuals: true,
});
exports.default = (models === null || models === void 0 ? void 0 : models.source) || model("source", SourceSchema);
