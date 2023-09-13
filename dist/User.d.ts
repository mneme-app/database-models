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
declare const _default: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPublic: boolean;
    username: string;
    displayName: string;
    passwordHash: string;
    refreshTokens: string[];
    associates: import("mongoose").Types.ObjectId[];
    groups: import("mongoose").Types.ObjectId[];
    quizzes: import("mongoose").Types.DocumentArray<{
        quizId: import("mongoose").Types.ObjectId;
        level: number;
        lastCorrect?: Date | undefined;
        hiddenUntil?: Date | undefined;
    }>;
    notifications: import("mongoose").Types.DocumentArray<{
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
    }>;
    avatar?: string | undefined;
    lastLogin?: Date | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPublic: boolean;
    username: string;
    displayName: string;
    passwordHash: string;
    refreshTokens: string[];
    associates: import("mongoose").Types.ObjectId[];
    groups: import("mongoose").Types.ObjectId[];
    quizzes: import("mongoose").Types.DocumentArray<{
        quizId: import("mongoose").Types.ObjectId;
        level: number;
        lastCorrect?: Date | undefined;
        hiddenUntil?: Date | undefined;
    }>;
    notifications: import("mongoose").Types.DocumentArray<{
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
    }>;
    avatar?: string | undefined;
    lastLogin?: Date | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPublic: boolean;
    username: string;
    displayName: string;
    passwordHash: string;
    refreshTokens: string[];
    associates: import("mongoose").Types.ObjectId[];
    groups: import("mongoose").Types.ObjectId[];
    quizzes: import("mongoose").Types.DocumentArray<{
        quizId: import("mongoose").Types.ObjectId;
        level: number;
        lastCorrect?: Date | undefined;
        hiddenUntil?: Date | undefined;
    }>;
    notifications: import("mongoose").Types.DocumentArray<{
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
    }>;
    avatar?: string | undefined;
    lastLogin?: Date | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPublic: boolean;
    username: string;
    displayName: string;
    passwordHash: string;
    refreshTokens: string[];
    associates: import("mongoose").Types.ObjectId[];
    groups: import("mongoose").Types.ObjectId[];
    quizzes: import("mongoose").Types.DocumentArray<{
        quizId: import("mongoose").Types.ObjectId;
        level: number;
        lastCorrect?: Date | undefined;
        hiddenUntil?: Date | undefined;
    }>;
    notifications: import("mongoose").Types.DocumentArray<{
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
    }>;
    avatar?: string | undefined;
    lastLogin?: Date | undefined;
}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPublic: boolean;
    username: string;
    displayName: string;
    passwordHash: string;
    refreshTokens: string[];
    associates: import("mongoose").Types.ObjectId[];
    groups: import("mongoose").Types.ObjectId[];
    quizzes: import("mongoose").Types.DocumentArray<{
        quizId: import("mongoose").Types.ObjectId;
        level: number;
        lastCorrect?: Date | undefined;
        hiddenUntil?: Date | undefined;
    }>;
    notifications: import("mongoose").Types.DocumentArray<{
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
    }>;
    avatar?: string | undefined;
    lastLogin?: Date | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    isPublic: boolean;
    username: string;
    displayName: string;
    passwordHash: string;
    refreshTokens: string[];
    associates: import("mongoose").Types.ObjectId[];
    groups: import("mongoose").Types.ObjectId[];
    quizzes: import("mongoose").Types.DocumentArray<{
        quizId: import("mongoose").Types.ObjectId;
        level: number;
        lastCorrect?: Date | undefined;
        hiddenUntil?: Date | undefined;
    }>;
    notifications: import("mongoose").Types.DocumentArray<{
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
    }>;
    avatar?: string | undefined;
    lastLogin?: Date | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default _default;
import { Schema } from "mongoose";
//# sourceMappingURL=User.d.ts.map