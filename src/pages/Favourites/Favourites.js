import React from "react";
import { Container } from "./../../Components/Container";
import styled from "styled-components";
import { breakpoints } from "./../../styles/Media";
import { TitlePages } from "../../Components/Text";

const FavouritesContainer = styled(Container)`
  background-color: ${(props) => props.theme.color.white};
  height: 100vh;
`;

export default function Favourites(props) {
  return (
    <FavouritesContainer id="favourites" rows="1fr 4fr">
      <Container place="center start" padding="0px 0px 0px 100px">
        <TitlePages>Favourites</TitlePages>
      </Container>
    </FavouritesContainer>
  );
}
