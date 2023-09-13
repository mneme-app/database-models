var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Schema } from "mongoose";
import User from "./User.js";
import Group from "./Group.js";
// validator needs to use the group listed for that admin
/**
 * @param {any} userId
 * @param {any} groupId
 */
function verifyAdmin(userId, groupId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (groupId) {
            const group = Group.findById(groupId);
            // @ts-ignore
            return group.admins.includes(userId);
        }
        const user = yield User.findById(userId);
        if (!user)
            return false;
        // @ts-ignore
        return user.roles.includes("admin");
    });
}
const fromField = new Schema({
    group: {
        type: Schema.Types.ObjectId,
        ref: "group",
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: "user",
        validate: {
            validator: (/** @type {String} */ value) => {
                // @ts-ignore
                verifyAdmin(value, this.group);
            },
            message: "You must be an administrator to send a message to an individual user",
        },
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
});
const NotificationSchema = new Schema({
    from: {
        type: fromField,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
    responseSent: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
export default NotificationSchema;
