import React from 'react'
import styled from 'styled-components'
import { portfolioList } from '../constant/DummyData';
import { colorCodes } from '../constant/color';

const { GREY } = colorCodes

const Container = styled.div`
    padding: 0px 20px;
    background: #f5f8fd;
    padding: 0px 20px;
    box-sizing: border-box;
    font-family: "Open Sans",sans-serif;
    .on-hovering {
        width: 100%;
        bottom: 140px;
        line-height: 26px;
        position: relative;
        text-align: center;
        transition: transform 2.1s;
        opacity: .0;
        :hover {
            opacity: .9;
            font-size: 20px;
            font-family: serif;
            font-weight: 600;
            cursor: pointer;
        }
    }
`;

const Text = styled.div`
    line-height: 26px;
    text-align: justify;
    padding-bottom: 30px;
    color: ${GREY};
`;

const Data = styled.div`
    width: 33%;
    position: relative;
    margin-bottom: 30px;
    padding-right: 15px;
    box-sizing: border-box;
    flex-direction: column;
    @media (max-width: 1100px) {
        width: 50%;
    }
    @media (max-width: 600px) {
        width: 100%;
        padding-right: unset;
    }
`;

const Image = styled.img`
    width: 100%;
    transition: transform 2.1s;
    :hover {
        opacity: .9;
        cursor: pointer;
        -ms-transform: scale(1.5);
        -webkit-transform: scale(1.5);
        transform: scale(1.2); 
    }
    :hover + .on-hovering {
        opacity: .9;
        display: block;
        font-size: 20px;
        font-weight: 600;
        font-family: serif;
    }
`;

const PortfolioImage = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const MyPortfolio = () => {

    return (
        <Container>
            <div className="title">Portfolio</div>
            <Text>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Text>
            <PortfolioImage>
                {portfolioList.map((obj, index) => {
                    return (
                        <Data key={index}>
                            <Image src={obj.img} alt="Prtfolio image" />
                            <div className="on-hovering">
                                <div>{obj.name}</div>
                                <div>{obj.post}</div>
                            </div>
                        </Data>
                    )
                })}
            </PortfolioImage>
        </Container>
    )
}

export default MyPortfolio