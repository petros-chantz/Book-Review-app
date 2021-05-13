import React from "react";
import { Container } from "./Container";
import { breakpoints } from "./../styles/Media";
import { TitlePages, TextRegular } from "../Components/Text";
import styled from "styled-components";

const PageTitleContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.laptopScreen}) {
    place-items: center;
    padding: 0px;
  }
`;

export default function PageTitle(props) {
  return (
    <PageTitleContainer
      place="center start"
      padding="0px 0px 0px 100px"
      gap="50px"
    >
      <TitlePages>{props.pageTitle}</TitlePages>
      <TextRegular>{props.pageSubtitle}</TextRegular>
    </PageTitleContainer>
  );
}
