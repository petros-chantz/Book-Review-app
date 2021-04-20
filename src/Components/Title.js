import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
    display: grid;
    place-items: center start;
`;

const TitleElement = styled.h3`
    font-size: 96px;
    font-weight: 700;
`;

export default function Title(props) {

    return (
        <TitleWrapper>
            <TitleElement>{props.pageTitle}</TitleElement>
        </TitleWrapper>
    );
}