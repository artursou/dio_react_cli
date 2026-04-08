import React from "react";

export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    control: any;
    name: string;
    LeftIcon?: React.ReactNode;
    errorMessage?: string;
}