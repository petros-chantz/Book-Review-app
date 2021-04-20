import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const LinkWrapper = styled.div`
    display: grid;
    place-items: center;

`;

const LinkElement = styled.p`
    color: ${props => props.linkTextColor};
    font-size: ${props => props.linkFontSize}px;
    font-weight: ${props => props.linkFontWeight};
    text-decoration: none;

    :hover{
        text-decoration: underline;
    }

    @media screen and (max-width: 800px){
        text-align: center;
    }
`;

export default function Link(props) {

    return (
        <LinkWrapper>
            <HashLink smooth to={props.linkDestination} >
                <LinkElement
                    linkTextColor={props.linkTextColor}
                    linkFontSize={props.linkFontSize}
                    linkFontWeight={props.linkFontWeight}
                >{props.linkName}</LinkElement>
            </HashLink>
        </LinkWrapper>
    );
}
