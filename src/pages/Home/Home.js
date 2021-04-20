import React from "react";
import { HomeWrapper, HomeHeaderWrapper, HomeFooterWrapper, HeaderTitleWrapper , FooterContactLinks, FooterCredits} from "./HomeStyling";
import Link from "../../Components/Link";
import Title from "../../Components/Title";
import HeaderLinksBlock from "./HeaderLinksBlock";
import Text from "./../../Components/Text";

export default function Home() {
    return (
        <HomeWrapper>
            <HomeHeaderWrapper>
                <HeaderLinksBlock/>
                <HeaderTitleWrapper>
                    <Title pageTitle="Book Reviews" />
                        <Text text="Discover more exciting books through reading reviews"
                        textColor="black"
                        textSize="34"
                        textWeight="600"
                        textAlign="justify"
                    />
                   
                </HeaderTitleWrapper>
            </HomeHeaderWrapper>
            <HomeFooterWrapper>
                <FooterContactLinks>
                <Link
                    linkDestination="/#about"
                    linkTextColor="black"
                    linkFontSize="24"
                    linkFontWeight="700"
                    linkName="About us"
                />
                <Link
                    linkDestination="/#contact"
                    linkTextColor="black"
                    linkFontSize="24"
                    linkFontWeight="700"
                    linkName="Contact"
                />
                </FooterContactLinks>
                <FooterCredits>
                    <p>Created by <a href="https://www.petros-chantzopoulos.com/" target="_blank" rel="noopener noreferrer" className="creditName">Petros</a></p>
                </FooterCredits>
            </HomeFooterWrapper>
        </HomeWrapper>
    );
}

                          