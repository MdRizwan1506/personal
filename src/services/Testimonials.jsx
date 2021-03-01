import React from 'react'
import styled from 'styled-components'
import { CarsouelData } from '../constant/DummyData';
import './Testimonials.css'
import { colorCodes } from '../constant/color';
import { devices } from '../constant/devices';

const { WHITE, GREY, ALICEBLUE } = colorCodes

const Container = styled.div`
    background: #f5f8fd;
    padding: 40px 20px;
    .center-flex {
        text-align: center;
        padding-bottom: 40px;
    }
    .review_triangle {
        position: absolute;
        width: 0;
        left: 55%;
        height: 0;
        left: calc(50% + 10%);
        box-sizing: border-box;
        border: 1em solid ${WHITE};
        transform-origin: 0 0;
        transform: rotate(135deg);
        z-index: 99;
      }
`;

const Text = styled.div`
    text-align: justify;
    line-height: 26px;
    padding-bottom: 50px;
`;

const MyExportTeam = styled.div`
    flex-wrap: wrap;
`;

const Description = styled.div`
    min-height: 200px;
    padding: 20px;
    line-height: 26px;
    background-color: ${WHITE};
    img {
        width: 25px;
        top: 8px;
        position: relative;
    }
    @media ${devices.mobile} {
        min-height: 150px;
    }
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
    width: 120px;
    height: 120px;
    margin-top: 40px;
    border-radius: 50%;
    transition: transform 2.1s;
    :hover {
        -ms-transform: scale(1.5);
        -webkit-transform: scale(1.5);
        transform: scale(1.1);        
    }
    @media ${devices.tablet} {
        width: 100px;
        height: 100px;
    }
    @media ${devices.tablet} {
        width: 120px;
        height: 120px;
    }

`;

const Name = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: ${ALICEBLUE};
`;

const Position = styled.div`
    font-size: 14px;
    color: ${GREY};
`;

const DataList = styled.div`
    width: 30%;
    margin: 20px 15px;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    @media ${devices.tablet} {
        width: 45%;
    }
    @media ${devices.mobile} {
        width: 100%;
    }
`;

const Testimonials = () => {
    return (
        <Container>
            <div className="title">Testimonials</div>
            <Text>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </Text>
            <MyExportTeam className="center-flex">
                {CarsouelData.map((obj, index) => {
                    return (
                        <DataList key={index}>
                            <Description>
                                <img className="pr-8" src={require(`../assets/quote/quote-alt-left.svg`)} alt="double-quote" />
                                {obj.text}
                                <img className="pl-8" src={require(`../assets/quote/quote-alt-right.svg`)} alt="double-quotes" />
                            </Description>
                            <div className="review_triangle"></div>
                            <Img src={obj.image} alt="services-image" />
                            <Name>{obj.name}</Name>
                            <Position>{obj.post}</Position>
                        </DataList>
                    )
                })}
            </MyExportTeam>
        </Container>
    )
}

export default Testimonials