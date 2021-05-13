import React, { useState, useEffect } from "react";
import { Container } from "./../../Components/Container";
import styled from "styled-components";
import { breakpoints } from "./../../styles/Media";
import PageTitle from "../../Components/PageTitle";
import SpotlightList from "./SpotlightList";
import SpotlightSelection from "./SpotlightSelection";
import { TextRegular } from "../../Components/Text";

const SpotlightContainer = styled(Container)`
  background-color: ${(props) => props.theme.color.white};
  height: 100vh;
  padding: 50px 0px 50px 0px;

  @media screen and (max-width: ${breakpoints.mobileLScreen}) {
    height: 130vh;
  }
`;

export default function Spotlight() {
  const [isloading, setLoading] = useState(true);
  const [spotlightBooks, setSpotlightbooks] = useState([]);
  const [topic, setTopic] = useState("hardcover-fiction");

  function HandleTopicChange(e) {
    setTopic(e.target.value);
  }

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/${topic}.json?api-key=s9if2hWM4htpZL2mt8fmBwUq0Q59GmAe`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSpotlightbooks(data);
        setLoading(false); //stop loader
      })
      .catch((error) => {
        setLoading(false); //stop loader
        console.log(error);
      });
  }, [topic]);

  return (
    <SpotlightContainer id="spotlight" rows="1fr 1fr 1fr 8fr">
      <PageTitle
        pageTitle="Spotlight"
        pageSubtitle="Books that are currently trending."
      />
      <SpotlightSelection HandleTopicChange={HandleTopicChange} />
      {isloading ? "" : <SpotlightList books={spotlightBooks} />}
    </SpotlightContainer>
  );
}
