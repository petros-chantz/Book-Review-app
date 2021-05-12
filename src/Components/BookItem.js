import styled from "styled-components";
import React from "react";
import { TextRegular, TextSmall } from "./Text";
import { Link } from "./Link";
import { Container } from "./Container";
import { ItemButton } from "./Button";
import { breakpoints } from "./../styles/Media";
import Heart from "../icons/Heart";

const ItemContainer = styled.a`
  display: grid;
  grid-template-rows: 1fr 1fr 7fr 1fr;
  gap: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%),
    0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
  grid-gap: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.color.green};
  cursor: pointer;
`;

const ButtonContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.screen4k}) {
    grid-template-columns: 8fr 1fr;
  }

  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    grid-template-columns: 4fr 1fr;
  }

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export default function BookItem(props) {
  const { news } = props;
  console.log(news);
  return (
    <ItemContainer width={props.width} height={props.height}>
      <Container place="center start">
        <TextSmall>type</TextSmall>
      </Container>
      <Container place="center end">
        <TextSmall>author</TextSmall>
      </Container>
      <Container place="center start">
        <TextRegular weight="600" align="left">
          title
        </TextRegular>
      </Container>
      <ButtonContainer>
        <Container place="center end">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            Read more
          </Link>
        </Container>
        <Container place="center end">
          <ItemButton>
            <Heart />
          </ItemButton>
        </Container>
      </ButtonContainer>
    </ItemContainer>
  );
}
