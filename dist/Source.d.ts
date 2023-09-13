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
    createdBy: import("mongoose").Types.ObjectId;
    title: string;
    authors: string[];
    tags: string[];
    permissions?: {
        allRead: boolean;
        allWrite: boolean;
        usersRead: import("mongoose").Types.ObjectId[];
        usersWrite: import("mongoose").Types.ObjectId[];
        groupsRead: import("mongoose").Types.ObjectId[];
        groupsWrite: import("mongoose").Types.ObjectId[];
    } | undefined;
    medium?: "book" | "article" | "video" | "podcast" | "website" | undefined;
    url?: string | undefined;
    publishedAt?: Date | undefined;
    lastAccessed?: Date | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdBy: import("mongoose").Types.ObjectId;
    title: string;
    authors: string[];
    tags: string[];
    permissions?: {
        allRead: boolean;
        allWrite: boolean;
        usersRead: import("mongoose").Types.ObjectId[];
        usersWrite: import("mongoose").Types.ObjectId[];
        groupsRead: import("mongoose").Types.ObjectId[];
        groupsWrite: import("mongoose").Types.ObjectId[];
    } | undefined;
    medium?: "book" | "article" | "video" | "podcast" | "website" | undefined;
    url?: string | undefined;
    publishedAt?: Date | undefined;
    lastAccessed?: Date | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdBy: import("mongoose").Types.ObjectId;
    title: string;
    authors: string[];
    tags: string[];
    permissions?: {
        allRead: boolean;
        allWrite: boolean;
        usersRead: import("mongoose").Types.ObjectId[];
        usersWrite: import("mongoose").Types.ObjectId[];
        groupsRead: import("mongoose").Types.ObjectId[];
        groupsWrite: import("mongoose").Types.ObjectId[];
    } | undefined;
    medium?: "book" | "article" | "video" | "podcast" | "website" | undefined;
    url?: string | undefined;
    publishedAt?: Date | undefined;
    lastAccessed?: Date | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdBy: import("mongoose").Types.ObjectId;
    title: string;
    authors: string[];
    tags: string[];
    permissions?: {
        allRead: boolean;
        allWrite: boolean;
        usersRead: import("mongoose").Types.ObjectId[];
        usersWrite: import("mongoose").Types.ObjectId[];
        groupsRead: import("mongoose").Types.ObjectId[];
        groupsWrite: import("mongoose").Types.ObjectId[];
    } | undefined;
    medium?: "book" | "article" | "video" | "podcast" | "website" | undefined;
    url?: string | undefined;
    publishedAt?: Date | undefined;
    lastAccessed?: Date | undefined;
}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdBy: import("mongoose").Types.ObjectId;
    title: string;
    authors: string[];
    tags: string[];
    permissions?: {
        allRead: boolean;
        allWrite: boolean;
        usersRead: import("mongoose").Types.ObjectId[];
        usersWrite: import("mongoose").Types.ObjectId[];
        groupsRead: import("mongoose").Types.ObjectId[];
        groupsWrite: import("mongoose").Types.ObjectId[];
    } | undefined;
    medium?: "book" | "article" | "video" | "podcast" | "website" | undefined;
    url?: string | undefined;
    publishedAt?: Date | undefined;
    lastAccessed?: Date | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdBy: import("mongoose").Types.ObjectId;
    title: string;
    authors: string[];
    tags: string[];
    permissions?: {
        allRead: boolean;
        allWrite: boolean;
        usersRead: import("mongoose").Types.ObjectId[];
        usersWrite: import("mongoose").Types.ObjectId[];
        groupsRead: import("mongoose").Types.ObjectId[];
        groupsWrite: import("mongoose").Types.ObjectId[];
    } | undefined;
    medium?: "book" | "article" | "video" | "podcast" | "website" | undefined;
    url?: string | undefined;
    publishedAt?: Date | undefined;
    lastAccessed?: Date | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default _default;
import { Schema } from "mongoose";
//# sourceMappingURL=Source.d.ts.map