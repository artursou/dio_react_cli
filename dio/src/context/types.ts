import React from "react";
import { IUser } from "../types/user";

export interface IAuthContext {
    user: IUser
}

export interface IAuthCOntextProviderProps {
    children: React.ReactNode;
}

export interface IoginData{
    email: string;
    password: string;
}