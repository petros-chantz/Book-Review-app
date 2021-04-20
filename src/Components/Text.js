import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
    display: grid;
    place-items: center;
`;

const TextElement = styled.h3`
    color: ${props => props.textColor};
    font-size: ${props => props.textSize}px;
    font-weight: ${props => props.textWeight};
    text-decoration: none;
    text-align: ${props => props.textAlign}
`;

export default function Text(props) {

    return (
        <TextWrapper>
            <TextElement
                textColor={props.textColor}
                textSize={props.textSize}
                textWeight={props.textWeight}
                textAlign={props.textAlign}
            >
                {props.text}    
            </TextElement>
        </TextWrapper>
    );
}