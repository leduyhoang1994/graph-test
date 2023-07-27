
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface User {
    id?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    creationDate?: Nullable<DateTime>;
    ingredients?: Nullable<string[]>;
}

export interface EduClass {
    name?: Nullable<string>;
}

export interface IQuery {
    EduClass(name: string): EduClass | Promise<EduClass>;
    User(name: string): User | Promise<User>;
    Users(): User[] | Promise<User[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
