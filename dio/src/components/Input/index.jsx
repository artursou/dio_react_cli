import React from "react";
import { IconContainer, InputContainer, InputText } from "./styles";

const Input = ({ LeftIcon, ...rest }) => {
    return (
        <InputContainer>
            {LeftIcon ? <IconContainer>{LeftIcon}</IconContainer> : null}
            <InputText {...rest} />
        </InputContainer>
    );
};

export { Input };