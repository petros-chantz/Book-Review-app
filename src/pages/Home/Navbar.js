import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "../../Components/Container";
import { TextNavbar } from "../../Components/Text";
import styled from "styled-components";
import { breakpoints } from "./../../styles/Media";

function NavbarLink(props) {
  return (
    <>
      <Container place="center end">
        <HashLink smooth to={props.HashLink}>
          <TextNavbar>{props.HashLinkName}</TextNavbar>
        </HashLink>
      </Container>
    </>
  );
}

const NavbarContainer = styled(Container)`
  padding: 50px 100px 0px 0px;

  @media screen and (max-width: ${breakpoints.tabletScreen}) {
    grid-template-columns: 1fr;
    gird-template-rows: repeat(4, 1fr);
    place-items: center end;
    grid-gap: 10px;
    padding: 30px 30px 0px 0px;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer rows="repeat(4,1fr)" place="center end">
      <NavbarLink HashLink="/#spotlight" HashLinkName="spotlight" />
      <NavbarLink HashLink="/#search" HashLinkName="search" />
      <NavbarLink HashLink="/#favourites" HashLinkName="favourites" />
      <NavbarLink HashLink="/#contact" HashLinkName="contact" />
    </NavbarContainer>
  );
}
