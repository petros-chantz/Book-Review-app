import React from "react";
import styled from "styled-components";
import Text from "../Components/Text";
import Title from "./../Components/Title";

const ContactWrapper = styled.div`
    display: grid;
    grid-template-rows: 150px 1fr;
`;

const ContactTitleWrapper = styled.div`
    margin: 0px 100px 0px 100px;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
`;

const ContactDetailsWrapper = styled.div`
    height: 50vh;
    background-color: #6E954B; 
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-position-x: initial;
    background-position-y: initial;
    background-size: 50px 50px;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    border-radius: 100px 100px 0px 0px;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
`;

const DetailsPanelLeft = styled.div`
    display: grid;
    padding-left: 120px;
    place-items: center start;
    height: 50%;
    grid-template-rows: repeat(2, 1fr);
`;

export default function Contact() {
    return (
        <ContactWrapper >
            <ContactTitleWrapper>
                <Title pageTitle="About" id="about"/>
                <Title pageTitle="Contact" id="contact"/>
            </ContactTitleWrapper>
            <ContactDetailsWrapper>
                <DetailsPanelLeft>
                    <Text text="So, you like us, ha?"
                        textColor="white"
                        textSize="50"
                        textWeight="700"
                        textAlign="left"
                    />
                    <Text text="We're a proud company located in Rotterdam, NL"
                        textColor="white"
                        textSize="30"
                        textWeight="700"
                        textAlign="left"
                    />
                </DetailsPanelLeft>
                <div>contact details</div>
            </ContactDetailsWrapper>
        </ContactWrapper>
    );
}

             