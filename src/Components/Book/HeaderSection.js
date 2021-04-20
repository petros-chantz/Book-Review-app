import React from "react";
import styled from "styled-components";

import Text from "./../../Components/Text";

const HeaderSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const AuthorWrapper = styled.div`
    display: grid;
    place-items: center start;
`;

const DateWrapper = styled.div`
    display: grid;
    place-items: center end;
`;

export default function HeaderSection() {
    return (
        <HeaderSectionWrapper>
            <AuthorWrapper>
                <Text text="Author"
                    textSize="18"
                    textColor="white"
                    textAlign="right"
                    textWeight="500"
                />
            </AuthorWrapper>
            <DateWrapper>
                <Text text="Date"
                    textSize="18"
                    textColor="white"
                    textAlign="right"
                    textWeight="500"
                />
            </DateWrapper>
        </HeaderSectionWrapper>
    );
}

