import React from 'react'
import styled from 'styled-components'
import Typing from './Typing';
import { colorCodes } from '../constant/color';
import { devices } from '../constant/devices';

const { WHITE } = colorCodes
const {tablet, mobile} = devices

const Container = styled.div`
    background-image: url("https://www.uscybersecurity.net/wp-content/uploads/2018/08/Black-Hat-Hacker.jpg");
    // @media ${tablet}{
    //     background-image: url("https://images.unsplash.com/photo-1562813733-b31f71025d54?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2VyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80")
    // }
    // @media ${mobile} {
    //      background-image: url("https://i.pinimg.com/originals/ff/e0/72/ffe0725ea2908b127ae40219cdd14e39.jpg")
    // }
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
`;

const HeroDiv = styled.div`
    top: 45%;
    margin-bottom: 10px;
    text-align: center;
    position: relative;
    justify-content: center;
    @media ${tablet} {
        font-size: 50px;
    }
    @media ${mobile} {
        font-size: 40px;
    }
    font-family: "Raleway", sans-serif;
`;

const Name = styled.div`
    color: ${WHITE};
    font-size: 64px;
    font-weight: 700;
    @media (max-width: 400px) {
        font-size: 40px;
        text-transform: uppercase;
    }
    font-family: "Raleway", sans-serif;
`;

const Introduction = styled.div`
    color: ${WHITE};
    font-size: 26px;
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
    font-family: inherit;
    span {
        padding-right: 10px;
    }
    @media (max-width: 400px) {
        font-size: 20px;
      }
`;

const words = ['Frontend Developer', 'Programmer', 'Designer', 'Freelancer', 'Photographer']

const SideMenu = () => {
    return (
        <Container>
            <HeroDiv>
                <Name> Md Rizwan </Name>
                <Introduction><span>I`m</span> <Typing words={words} /></Introduction>
            </HeroDiv>
        </Container>
    )
}

export default SideMenu
