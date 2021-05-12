import React from "react";
import { Container } from "./../../Components/Container";
import styled from "styled-components";
import { breakpoints } from "./../../styles/Media";
import { TitlePages } from "../../Components/Text";
import Input from "../../Components/Input";

const SearchContainer = styled(Container)`
  background-color: ${(props) => props.theme.color.white};
  height: 100vh;
`;

export default function Search(props) {
  return (
    <SearchContainer id="search" rows="1fr 50px 1fr 2fr">
      <Container place="center start" padding="0px 0px 0px 100px">
        <TitlePages>Search</TitlePages>
      </Container>
      <Container place="center">
        <Input />
      </Container>
      <Container></Container>
    </SearchContainer>
  );
}
