import React from "react";
import { FiThumbsUp } from "react-icons/fi"

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://hermes.digitalinnovation.one/assets/diome/logo.png"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/93260734?v=4&size=64" />
                    <div>
                        <h4> Artur Souza Santos</h4>
                        <p> Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade... <strong> Saiba Mais </strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export {Card}