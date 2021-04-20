import React from "react";
import styled from "styled-components";

const KeywordWrapper = styled.button`
    display: grid;
    place-items: center;
    padding: 5px 50px 5px 50px;
    border-radius: 20px;
    border: ${props => props.pressed ? "3px solid white" : "3px solid #6E954B"};
    background-color: ${props => props.pressed ? "#6E954B" : "white"};
    cursor: pointer;
`;

const KeywordTextElement = styled.p`
    font-size: 18px;
    color: ${props => props.pressed ? "white" : "#1F2421"};
    font-weight: 600;
`;

export default function Keyword(props) {
    return (
        <KeywordWrapper>
            <KeywordTextElement>
                {props.keyword}
           </KeywordTextElement>
        </KeywordWrapper>
    );
}