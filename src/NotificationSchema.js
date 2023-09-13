import { Schema } from "mongoose";
import User from "./User.js";
import Group from "./Group.js";

// validator needs to use the group listed for that admin
/**
 * @param {any} userId
 * @param {any} groupId
 */
async function verifyAdmin(userId, groupId) {
  if (groupId) {
    const group = Group.findById(groupId);
    // @ts-ignore
    return group.admins.includes(userId);
  }
  const user = await User.findById(userId);
  if (!user) return false;
  // @ts-ignore
  return user.roles.includes("admin");
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
      message:
        "You must be an administrator to send a message to an individual user",
    },
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const NotificationSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export default NotificationSchema;
