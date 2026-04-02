import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    max-width: 300px;
`;

export const Column = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 20px;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`;

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    margin-bottom: 20px; 
    line-height: 44px;
`;
export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px; 
    line-height: 25px;
    color: #c5c5c5;
    margin: 15px 0;
`;


export const JaTenhoConta = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px; 
    line-height: 19px;

    color: #ffffff;
`;

export const JaTenhoContaLink = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px; 
    line-height: 19px;

    color: #8ceb7f;
`;

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px; 
    line-height: 19px;

    color: #E23DD7;
`;