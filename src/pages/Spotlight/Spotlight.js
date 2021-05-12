import React from "react";
import { Container } from "./../../Components/Container";
import styled from "styled-components";
import { breakpoints } from "./../../styles/Media";
import { TitlePages } from "../../Components/Text";
import BookItem from "../../Components/BookItem";

const SpotlightContainer = styled(Container)`
  background-color: ${(props) => props.theme.color.white};
  height: 100vh;
`;

export default function Spotlight(props) {
  return (
    <SpotlightContainer id="spotlight" rows="1fr 4fr">
      <Container place="center start" padding="0px 0px 0px 100px">
        <TitlePages>Spotlight</TitlePages>
      </Container>
      <Container columns="repeat(3,1fr)" rows="1fr 1fr" place="center">
        <BookItem height="60%" width="90%" />
        <BookItem height="60%" width="90%" />
        <BookItem height="60%" width="90%" />
        <BookItem height="60%" width="90%" />
        <BookItem height="60%" width="90%" />
        <BookItem height="60%" width="90%" />
      </Container>
    </SpotlightContainer>
  );
}
