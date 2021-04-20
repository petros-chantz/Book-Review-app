import React from "react";
import styled from "styled-components";
import Title from "./../Components/Title";

const SportlightWrapper = styled.div`
    margin: 100px;
    display: grid;
    grid-template-rows: 150px 1fr;
    grid-gap: 20px;
`;

export default function Sportlight() {
    return (
        <SportlightWrapper>
           <Title pageTitle="Spotlight"/>
        </SportlightWrapper>
    );
}