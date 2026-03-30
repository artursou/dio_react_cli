import React from "react";
import { IconContainer, InputContainer, InputText,ErrorText } from "./styles";
import { Controller } from "react-hook-form"

const Input = ({ control, name, LeftIcon, errorMessage, ...rest }) => {
    return (
        <>
        <InputContainer>
            {LeftIcon ? <IconContainer>{LeftIcon}</IconContainer> : null}
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <InputText {...field}{...rest} />}
            />
            
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    );
};

export { Input };