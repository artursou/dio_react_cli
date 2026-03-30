import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({onclick ,title, variant="primary"}) => {
   return (
    <ButtonContainer variant={variant} onClick={onclick}>
        {title}
    </ButtonContainer>
   )
}

export { Button }