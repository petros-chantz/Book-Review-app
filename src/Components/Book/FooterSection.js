import React from "react";
import styled from "styled-components";
import Link from "./../Link";

const FooterSectionWrapper = styled.div`
    display: grid;
    place-items: center end;
`;

const LinksBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export default function FooterSection() {
    return (
        <FooterSectionWrapper>
            <LinksBlock>
                <Link
                    linkName="Save to Favourites"
                    linkDestination="/#favourites"
                    linkTextColor="white"
                    linkFontSize="18"
                    linkFontWeight="500"
                />
                <Link
                    linkName=""
                    linkDestination=""
                    linkTextColor=""
                    linkFontSize="18"
                    linkFontWeight="500"
                />
            </LinksBlock>
        </FooterSectionWrapper>
    );
}