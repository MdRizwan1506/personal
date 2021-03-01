import React from 'react'
import styled from 'styled-components'
import { colorCodes } from '../constant/color';
import { devices } from '../constant/devices';

const { BLUE_1, GREY, ALICEBLUE } = colorCodes

const Container = styled.div`
    padding: 0px 20px;
`;

const Text = styled.div`
    color: ${GREY};
    font-size: 1rem;
    font-weight: 400;
    line-height: 26px;
    text-align: justify;
    font-family: "Open Sans", sans-serif;
`;

const MyDetails = styled.div`
    display: flex;
    padding-top: 30px;
    @media(max-width: 870px){
        display: unset;
    }
`;

const Image = styled.div`
    img {
        width: 200px;
        height: 300px;
        :hover {
            opacity: 0.9;
            cursor: pointer;
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
        }
        @media ${devices.tablet} {
            margin-top: 20px;
            text-align: center !important;
        }
    }
    @media(max-width: 870px){
        text-align: center;
    }
`;

const Information = styled.div`
    padding: 0px 30px;
    @media(max-width:870px) {
        padding: unset;
    }
`;

const Title = styled.div`
    color: ${ALICEBLUE};
    font-weight: 700;
    font-size: 26px;
    padding-bottom: 20px;
    @media(max-width:870px) {
        padding-top: 20px;
    }
`;

const Description = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${GREY};
    font-family: "Open Sans", sans-serif;
`;

const Details = styled.div`
    display: flex;
    padding: 20px 0px;
    span {
        font-weight: 600;
        padding-right: 5px;
    }
    .align-center {
        color: ${GREY};
        align-items: center;
        display: flex;
    }
    i {
        color: ${BLUE_1};
        font-size: 24px;
        font-weight: 500;
        padding-right: 10px;
    }
    @media(max-width:1150px) {
        flex-wrap: wrap;
        display: unset;
    }
`;

const Paragraph = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${GREY};
    line-height: 26px;
    text-align: justify;
    font-family: "Open Sans", sans-serif;
    @media(max-width: 768px){
        padding: 20px 0px;
    }
`;

const FirstSection = styled.div`
    min-width: 300px;
    line-height: 40px;
`;

const SecondSection = styled.div`
    min-width: 300px;
    line-height: 40px;
`;


const About = () => {
    return (
        <Container>
            <div className="title">About</div>
            <Text>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Text>
            <MyDetails>
                <Image>
                    <img src={require(`../assets/card-images/rizwan4.jpg`)} alt="my-about" />
                </Image>
                <Information>
                    <Title>UI/UX Designer & Web Developer.</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Description>
                    <Details>
                        <FirstSection>
                            <div className="align-center"><i className="fal fa-angle-right"></i><span>Birthday : </span> 01 / July / 1998</div>
                            <div className="align-center"><i className="fal fa-angle-right"></i><span>Website : </span>  My-Personal-Project </div>
                            <div className="align-center"><i className="fal fa-angle-right"></i><span>Phone : </span> +91 8383944926</div>
                            <div className="align-center"><i className="fal fa-angle-right"></i><span>City : </span> Haryana , India</div>
                        </FirstSection>
                        <SecondSection>
                            <div className="align-center"><i className="fal fa-angle-right"></i><span>Age : </span> 21 </div>
                            <div className="align-center"><i className="fal fa-angle-right"></i><span>Degree : </span> Computer Science (CS)</div>
                            <div className="align-center"><i className="fal fa-angle-right"></i><span>Email : </span>mdrizwan@gmail.com</div>
                            <div className="align-center"><i className="fal fa-angle-right"></i><span>Freelance : </span> Available</div>
                        </SecondSection>
                    </Details>
                    <Paragraph>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </Paragraph>
                </Information>
            </MyDetails>
        </Container>
    )
}

export default About
