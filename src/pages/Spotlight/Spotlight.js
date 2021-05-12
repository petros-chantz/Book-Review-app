import React, { useState, useEffect } from "react";
import { Container } from "./../../Components/Container";
import styled from "styled-components";
import { breakpoints } from "./../../styles/Media";
import { TitlePages } from "../../Components/Text";
import BookItem from "../../Components/BookItem";
import { Button } from "../../Components/Button";

const SpotlightContainer = styled(Container)`
  background-color: ${(props) => props.theme.color.white};
  height: 100vh;
`;

export default function Spotlight(props) {
  const [isloading, setLoading] = useState(true);
  const [spotlightBooks, setSpotlightbooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=s9if2hWM4htpZL2mt8fmBwUq0Q59GmAe`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false); //stop loader
        console.log(data);
        setSpotlightbooks(data);
      })
      .catch((error) => {
        setLoading(false); //stop loader
        console.log(error);
      });
  }, []);

  return (
    <SpotlightContainer id="spotlight" rows="1fr 4fr">
      <Container place="center start" padding="0px 0px 0px 100px">
        <TitlePages>Spotlight</TitlePages>
      </Container>
      <Container
        columns="repeat(3,1fr)"
        place="center"
        gap="50px"
        padding="50px"
      >
        <BookItem books={spotlightBooks} />
        <BookItem books={spotlightBooks} />
        <BookItem books={spotlightBooks} />
      </Container>
      <Container
        columns="repeat(4,1fr)"
        padding="0px 300px 0px 300px"
        gap="150px"
      >
        <Button>authors</Button>
        <Button>books</Button>
        <Button>authors</Button>
        <Button>authors</Button>
      </Container>
    </SpotlightContainer>
  );
}
