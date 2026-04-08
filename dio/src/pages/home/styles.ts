import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 120px auto 0; /* Forma contraída: topo, laterais, baixo */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif; /* Corrigido: Open Sans */
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px; /* Corrigido: bottom com "m" */
    line-height: 44px;

    color: #FFFFFF;
`;

export const TitleHighLight = styled.span`
    color: #E4105D; /* Adicionado ponto e vírgula */
`;

export const TextContent = styled.p`
    font-family: 'Open Sans', sans-serif; /* Corrigido: Open Sans */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px; /* Corrigido: bottom com "m" */
    line-height: 22px;

    color: #FFFFFF;
`;