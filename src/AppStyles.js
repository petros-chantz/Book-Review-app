import styled from "styled-components";

export const AppWrapper = styled.div`
    height: 100vh;
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
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
`;