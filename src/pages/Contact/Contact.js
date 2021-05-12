import React from "react";
import { Container } from "./../../Components/Container";
import styled from "styled-components";
import { breakpoints } from "./../../styles/Media";
import { TextRegular, TitlePages } from "../../Components/Text";
import Input from "../../Components/Input";

const ContactContainer = styled(Container)`
  background-color: ${(props) => props.theme.color.white};
  height: 50vh;
`;

const Content = styled(Container)`
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
  border-radius: 100px 100px 0px 0px;
`;

export default function Contact(props) {
  return (
    <ContactContainer id="contact">
      <Container place="center start" padding="0px 0px 0px 100px">
        <TitlePages>Contact</TitlePages>
      </Container>
      <Content columns="1fr 1fr" place="center" rows="1fr">
        <Container>
          <TextRegular>Hello</TextRegular>
        </Container>
        <Container>
          <TextRegular>FAQ</TextRegular>
        </Container>
      </Content>
    </ContactContainer>
  );
}
