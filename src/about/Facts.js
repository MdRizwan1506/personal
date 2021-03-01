import React from 'react'
import styled from 'styled-components'
import CountUp from "react-countup";
import { colorCodes } from '../constant/color';

const { BLUE_1, GREY } = colorCodes

const Container = styled.div`
    padding: 60px 20px;
    box-sizing: border-box;
`;

const Text = styled.div`
    color: ${GREY};
    line-height: 26px;
    text-align: justify;
`;


const FactsList = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-top: 50px;
    display: flex;
    i {
        color: ${BLUE_1};
    }
    @media(max-width:1200px) {
        flex-wrap: wrap;
        display: unset;
    }
`;
const Clients = styled.div`
    display: flex;
    display: flex;
    min-width: 22%;
    padding: 30px 15px;
`;
const Projects = styled.div`
    display: flex;
    display: flex;
    min-width: 22%;
    padding: 30px 15px;
`;
const HardWorkers = styled.div`
    display: flex;
    display: flex;
    min-width: 22%;
    padding: 30px 15px;
`;
const HoursOfSupport = styled.div`
    display: flex;
    display: flex;
    min-width: 22%;
    padding: 30px 15px;
`;
const Icon = styled.div`
    font-size: 50px;
    height: 55px;
`;

const Data = styled.div`
    color: ${GREY};
    display: block;
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    padding-left: 20px;
`;

const Heading = styled.div`
    color: #122f57;
    padding-left: 20px;
    padding-top: 10px;
    font-size: 14px;
    font-weight: 900;
    line-height: 26px;
    font-family: "Raleway", sans-serif;
`;

const SubHeading = styled.div`
    min-width: 160px;
    @media(max-width:768px) {
        min-width: unset;
    }
`;

const SubTitle = styled.div`
    padding-left: 20px;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    color: #122f57;
`;

const Facts = () => {
    return (
        <Container>
            <div className="title">Facts</div>
            <Text>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </Text>
            <FactsList>
                <Clients>
                    <Icon><i className="fas fa-smile"></i></Icon>
                    <SubHeading>
                        <Data><CountUp end={232} duration={5} /></Data>
                        <div>
                            <Heading>Happy Clients</Heading>
                            <SubTitle>consequuntur  quae</SubTitle>
                        </div>
                    </SubHeading>
                </Clients>
                <Projects>
                    <Icon><i className="fas fa-file-alt"></i></Icon>
                    <SubHeading>
                        <Data><CountUp end={521} duration={5} /></Data>
                        <div>
                            <Heading>Happy Clients</Heading>
                            <SubTitle>consequuntur  quae</SubTitle>
                        </div>
                    </SubHeading>
                </Projects>
                <HardWorkers>
                    <Icon><i className="fas fa-user-headset"></i></Icon>
                    <SubHeading>
                        <Data><CountUp end={1463} duration={5} /></Data>
                        <div>
                            <Heading>Happy Clients</Heading>
                            <SubTitle>consequuntur quae</SubTitle>
                        </div>
                    </SubHeading>
                </HardWorkers>
                <HoursOfSupport>
                    <Icon><i className="fas fa-users"></i></Icon>
                    <SubHeading>
                        <Data><CountUp end={15} duration={5} /></Data>
                        <div>
                            <Heading>Happy Clients</Heading>
                            <SubTitle>consequuntur quae</SubTitle>
                        </div>
                    </SubHeading>
                </HoursOfSupport>
            </FactsList>
        </Container>
    )
}

export default Facts
