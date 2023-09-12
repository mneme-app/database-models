"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema } = require("mongoose");
const User_js_1 = __importDefault(require("./User.js"));
// validator needs to use the group listed for that admin
/**
 * @param {any} value
 */
function verifyAdmin(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_js_1.default.findById(value);
        if (!user)
            return false;
        return user.roles.includes("admin");
    });
}
const NotificationSchema = new Schema({
    from: {
        group: {
            type: Schema.Types.ObjectId,
            ref: "group",
        },
        admin: {
            type: Schema.Types.ObjectId,
            ref: "user",
            validate: {
                validator: verifyAdmin,
                message: "You must be an administrator to send a message to an individual user",
            },
        },
        required: true,
    },
    subject: {
        type: String,
        required: true,
        enum: {
            values: [
                "Response required: Notice of violation",
                "A group has invited you to join them!",
            ],
        },
    },
    message: {
        type: String,
    },
});
exports.default = NotificationSchema;
