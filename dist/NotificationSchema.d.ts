/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose/types/inferschematype.js" />
export default NotificationSchema;
declare const NotificationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    from: {
        user?: import("mongoose").Types.ObjectId | undefined;
        group?: import("mongoose").Types.ObjectId | undefined;
        admin?: import("mongoose").Types.ObjectId | undefined;
    };
    subject: string;
    responseSent: boolean;
    message?: string | undefined;
}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    from: {
        user?: import("mongoose").Types.ObjectId | undefined;
        group?: import("mongoose").Types.ObjectId | undefined;
        admin?: import("mongoose").Types.ObjectId | undefined;
    };
    subject: string;
    responseSent: boolean;
    message?: string | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    from: {
        user?: import("mongoose").Types.ObjectId | undefined;
        group?: import("mongoose").Types.ObjectId | undefined;
        admin?: import("mongoose").Types.ObjectId | undefined;
    };
    subject: string;
    responseSent: boolean;
    message?: string | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
import { Schema } from "mongoose";
//# sourceMappingURL=NotificationSchema.d.ts.map