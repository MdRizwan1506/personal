import React from 'react'
import styled from 'styled-components'
import { colorCodes } from '../constant/color';

const { ALICEBLUE, WHITE, GREY } = colorCodes

const Container = styled.div`
    padding: 0px 20px;
    margin-bottom: 50px;
    font-family: "Open Sans",sans-serif;
`;

const Title = styled.div`
    color: ${ALICEBLUE};
    font-size: 32px;
    padding-top: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 20px;
    @media (max-width: 400px) {
        text-align: center;
        padding-top: 60px;
        padding-bottom: unset;
    }
`;

const HeaderDiv = styled.div``;

const InnerBody = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 768px) {
        display: unset;
    }
`;

const SumaryDiv = styled.div`
    width: 50%;
    @media (max-width: 900px) {
        width: 100%;
    }
`;
const ExperienceDiv = styled.div`
    width: 50%;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const SumryBody = styled.div`
    padding: 0 20px 0px 20px;
    border-left: 2px solid #1f5297;
    position: relative;
`;

const Heading = styled.div`
    color: #050d18;
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
`;

const TitleTwo = styled.div`
    font-size: 26px;
    font-weight: 700;
    margin: 30px 0px;
    color: ${GREY};
    @media (max-width: 400px) {
        text-align: center;
        padding-bottom: unset;
    }
`;


const SubTitle = styled.div`
    font-style: italic;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: ${WHITE};
    font-family: "Open Sans", sans-serif;
`;

const MyInformation = styled.div`
    ul {
        padding-left: 20px;
        line-height: 35px;
    }
    margin-bottom: ${props => props.paddingTop ? "20px" : "0"};
`;

const ExperienceBody = styled.div`
    position: relative;
    padding: 0 20px 0px 20px;
    border-left: 2px solid ${ALICEBLUE};
`;


const YearDiv = styled.div`
    font-size: 16px;
    background: #e4edf9;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin: 15px 0px;
    // color: ${ALICEBLUE};
`;

const Place = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-style: italic;
    color: #212529;
    text-align: left;
`;

const Education = styled.div``;

const Description = styled.div`
    line-height: 26px;
    padding-top: 20px;
    padding-bottom: ${props => props.paddingBottom ? "40px" : "0px"};
`;

const CheckBoxDiv = styled.div`
  width: 20px;
  height: 20px;
  left: -11px;
  border-radius: 50%;
  position: absolute;
  background: ${WHITE};
  box-sizing: border-box;
  border: 2px solid ${ALICEBLUE};
`;


const MyResume = () => {
    return (
        <Container>
            <HeaderDiv>
                <Title>Resume</Title>
            </HeaderDiv>
            <InnerBody>
                <SumaryDiv>
                    <TitleTwo>Sumary</TitleTwo>
                    <SumryBody>
                        <CheckBoxDiv />
                        <Heading>MD RIZWAN</Heading>
                        <SubTitle>
                            Innovative and deadline-driven React & Redux developer with 1+ years of experience in developing user-Interface .
                        </SubTitle>
                        <MyInformation>
                            <ul>
                                <li>H.No 23 Block No-A JSL Colony, Hisar</li>
                                <li>+91 8383944926</li>
                                <li>mdrizwan@gmail.com</li>
                            </ul>
                        </MyInformation>
                    </SumryBody>
                    <Education>
                        <TitleTwo>Education</TitleTwo>
                        <SumryBody>
                            <CheckBoxDiv />
                            <Heading>SCHOOL CLASS 9TH</Heading>
                            <YearDiv>2014 - 2015</YearDiv>
                            <Place>Guru Nanak Dev Senior Secondary School</Place>
                            <Place>Board : Haryana Board of School Education</Place>
                            <Description paddingBottom={true}>Guru Dawara Road (Hisar, Haryana)</Description>
                        </SumryBody>
                    </Education>
                    <SumryBody>
                        <CheckBoxDiv />
                        <Heading>SCHOOL CLASS 10TH</Heading>
                        <YearDiv>2015 - 2016</YearDiv>
                        <Place>Guru Nanak Dev Senior Secondary School</Place>
                        <Place>Board : Haryana Board of School Education</Place>
                        <Description>Guru Dawara Road (Hisar, Haryana)</Description>
                    </SumryBody>
                    <SumryBody className="pt-30">
                        <CheckBoxDiv />
                        <Heading>DIPLOMA (CS)</Heading>
                        <YearDiv>2017 - 2020</YearDiv>
                        <Place>Govt Polytechnic , Hisar (NH-9)</Place>
                        <MyInformation paddingTop={true}>
                            <ul>
                                <li>Diploma Computer Science Engineering (CS)</li>
                                <li>Personal Skills (Skills Developed during my Diploma)</li>
                                <li>Basic knowledge in C</li>
                                <li>Ability to cope with the changing environment.</li>
                                <li>Self  and quick learner</li>
                            </ul>
                        </MyInformation>
                    </SumryBody>
                </SumaryDiv>
                <ExperienceDiv>
                    <TitleTwo>Personal Experience</TitleTwo>
                    <ExperienceBody>
                        <CheckBoxDiv />
                        <Heading>Summer Trainning </Heading>
                        <YearDiv>June 2019 - July 2019</YearDiv>
                        <Place>Govt Polytechnic, Hisar</Place>
                        <MyInformation paddingTop={true}>
                            <ul>
                                <li><b>Company : </b> Daffodil Software LTD(Metroplois)</li>
                                <li><b>Project Name : </b> My-Personal-Project</li>
                                <li><b>Description : </b>This website based on my personal information</li>
                                <li><b>Language : </b>HTML, CSS, Rect and Javasript (JS)</li>
                            </ul>
                        </MyInformation>
                        <div className="pt-30">
                            <CheckBoxDiv />
                            <Heading >Personal Skills </Heading>
                            <MyInformation>
                                <ul>
                                    <li>Skills Developed during Summer training</li>
                                    <li>Good communication & presentation skills</li>
                                    <li>Problem Solving Skills</li>
                                    <li>Self and quick learner</li>
                                    <li>Competitive Programming On Hacker rank</li>
                                    <li>Language : English, Hindi, Urdu</li>
                                </ul>
                            </MyInformation>
                        </div>
                        <div className="pt-30">
                            <CheckBoxDiv />
                            <Heading>INTERNSHIP </Heading>
                            <YearDiv>2020- PRESENT</YearDiv>
                            <Place><b>Company Name : </b> Repozitory Technology <br />Sector - 14 Hisar, Haryana</Place>
                            <MyInformation paddingTop={true}>
                                <ul>
                                    <li>Frontend Developer. (FE)</li>
                                    <li>Redux and UI Developer</li>
                                </ul>
                            </MyInformation>
                        </div>
                    </ExperienceBody>
                </ExperienceDiv>
            </InnerBody>
        </Container>
    )
}

export default MyResume