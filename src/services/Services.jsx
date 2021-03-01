import React, { useEffect } from 'react'
import styled from 'styled-components';
import { services } from '../constant/DummyData';
import { colorCodes } from '../constant/color';
import { devices } from '../constant/devices';

const { BLUE_1, WHITE } = colorCodes

const Conatiner = styled.div`
    padding: 0px 20px;
    margin-bottom: 50px;
    font-family: "Open Sans",sans-serif;
`;

const Text = styled.div`
    text-align: justify;
    line-height: 26px;
    padding-bottom: 30px;
`;

const ServicesDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;
const Data = styled.div`
    width: 33%;
    margin-bottom: 30px;
    padding-right: 15px;
    box-sizing: border-box;
    flex-direction: column;
    :hover {
        cursor: pointer;
        .icon-class {
            color: ${BLUE_1};
            background: ${WHITE};
            border: 1px solid ${BLUE_1};
            text-decoration: none;
        }
    }
    @media ${devices.tablet}{
        width: 50%;
    }
    @media ${devices.mobile}{
        width: 100%;
        margin-bottom: unset;
    }
`;

const TitleList = styled.div`
    display: flex;
    margin-left: 80px;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 15px;
`;

const Description = styled.div`
    margin-left: 80px;
    line-height: 24px;
    font-size: 14px;
`;

const Icon = styled.i`
    top: 40px;
    width: 44px;
    color: ${WHITE};
    height: 44px;
    border-radius: 50%;
    position: relative;
    background: ${BLUE_1};
    box-sizing: border-box;
`;

const MyServices = () => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);
      
    return (
        <Conatiner>
            <div className="title">Services</div>
            <Text>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </Text>
            <ServicesDiv>
                {!!services && !services.lenght && services.map((obj, index) => {
                    return (
                        <Data key={index}>
                            <Icon className="icon-class center-flex"><i className={obj.icon} /></Icon>
                            <TitleList>{obj.title}</TitleList>
                            <Description>{obj.text}</Description>
                        </Data>
                    )
                })}
            </ServicesDiv>
        </Conatiner>
    )
}

export default MyServices
