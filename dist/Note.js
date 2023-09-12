"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { model, models, Schema } = require("mongoose");
const PermissionSchema_js_1 = __importDefault(require("./PermissionSchema.js"));
// Should add option to link to videos/images instead of text
// Captions will be required in those cases
// Don't forget to validate at least one source ID
const NoteSchema = new Schema({
    text: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 256,
    },
    sources: [
        {
            type: Schema.Types.ObjectId,
            ref: "source",
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
    permissions: PermissionSchema_js_1.default,
}, {
    timestamps: true,
});
NoteSchema.set("toJSON", {
    virtuals: true,
});
exports.default = (models === null || models === void 0 ? void 0 : models.note) || model("note", NoteSchema);
