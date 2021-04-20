import React from "react";
import styled from "styled-components";
import Link from "../../Components/Link";

const HeaderLinksBlockWrapper = styled.div`
    margin: 50px 50px 20px 50px;
    display: grid;
    place-items: center end;

    @media screen and (max-width: 800px){
        margin: 50px 50px 50px 50px;
    }
`;

const LinkBlock = styled.div`
    display: grid;
    place-items: center;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr)
`;

export default function HeaderLinksBlock() {
    return (
        <HeaderLinksBlockWrapper>
            <LinkBlock>
            <Link
                linkDestination="/#spotlight"
                linkTextColor="white"
                linkFontSize="24"
                linkFontWeight="700"
                linkName="Spotlight"
            />
            <Link
                linkDestination="/#favourites"
                linkTextColor="white"
                linkFontSize="24"
                linkFontWeight="700"
                linkName="My Favourites"
            />
            <Link
                linkDestination="/#search"
                linkTextColor="white"
                linkFontSize="24"
                linkFontWeight="700"
                linkName="Search"
            /> 
            </LinkBlock>
        </HeaderLinksBlockWrapper>
    );
}