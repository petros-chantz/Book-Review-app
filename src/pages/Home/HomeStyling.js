import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: grid;
    grid-template-rows: 8fr 1fr;
    height: 100vh;
`;

export const HomeHeaderWrapper = styled.div`
    background-color: #6E954B; 
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-position-x: initial;
    background-position-y: initial;
    background-size: 50px 50px;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    border-radius: 0px 0px 100px 100px;
    display:grid;
    grid-template-rows: 1fr 4fr;
`;

export const HeaderTitleWrapper = styled.div`
    margin: 200px 50px 200px 50px;
    display: grid;
    place-items: center start;
    grid-template-rows: 4fr 2fr;

    .subTitle{
        display: grid;
        place-items: start;
    }
`;

export const HomeFooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const FooterContactLinks = styled.div`
    display: grid;
    place-items: center start;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 50px;
`;

export const FooterCredits = styled.div`
    display: grid;
    place-items: center end;
    margin-right: 100px;
    .creditName{
        color: black;
        font-size: 18px;
        text-decoration: underline;
    }
`;


