import React from "react";
import styled from "styled-components";
import { Container } from "../../Components/Container";
import { Subtitle, TextSmall, Title } from "../../Components/Text";
import { LinkFooter } from "../../Components/Link";
import { breakpoints } from "./../../styles/Media";
import Navbar from "./Navbar";

const HomeContainer = styled(Container)`
  height: 90vh;
  background-color: ${(props) => props.theme.color.green};
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-position-x: initial;
  background-position-y: initial;
  background-size: 50px 50px;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  border-radius: 0px 0px 100px 100px;
  display: grid;
  grid-template-rows: 1fr 4fr;
`;

const TitlesContainer = styled(Container)`
  padding: 0px 0px 0px 200px;

  @media screen and (max-width: ${breakpoints.laptopLScreen}) {
    padding: 0px 0px 0px 50px;
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    padding: 0px 50px 0px 50px;
  }
`;

const CreditsContainer = styled(Container)`
  height: 10vh;

  @media screen and (max-width: ${breakpoints.screen4k}) {
    place-items: center end;
    padding: 0px 100px 0px 0px;
  }

  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    place-items: center;
    padding: 0px;
  }
`;

export default function Home() {
  return (
    <Container>
      <HomeContainer>
        <Navbar />
        <TitlesContainer>
          <Container place="end start">
            <Title>Book Reviews</Title>
          </Container>
          <Subtitle>Discovering new books hasn't been this easy!</Subtitle>
        </TitlesContainer>
      </HomeContainer>
      <CreditsContainer>
        <TextSmall>
          Created by
          <span>
            {" "}
            <LinkFooter
              href="https://www.petros-chantzopoulos.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Petros
            </LinkFooter>{" "}
          </span>
        </TextSmall>
      </CreditsContainer>
    </Container>
  );
}
