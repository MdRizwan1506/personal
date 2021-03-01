import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { FriendsCarsouel, CardData } from '../constant/DummyData'
import './Carsouel.css'
import { colorCodes } from '../constant/color'

const { WHITE, BLUE_1, GREY, LIGHT_BLACK } = colorCodes

const Container = styled.div`
  z-index: -1 !important;
  .slick-dots {
    font--size: 20px;
  } 
`;

const AngleLeftArrow = styled.i`
  display: ${(props) =>
    props.availability === "slick-arrow slick-prev slick-disabled"
      ? "none !important"
      : ""};
`;

const AngleRightArrow = styled.i`
  display: ${(props) =>
    props.availability === "slick-arrow slick-next slick-disabled"
      ? "none !important"
      : ""};
`;

const FriendsList = styled.div`
    margin-top: 50px;
    padding: 0px 20px;
    position: relative;
`;

const ListData = styled.div`
    width: 300px;
    height: 390px;
    margin-bottom: 50px;
    position: relative;
    box-sizing: border-box;
    img {
      top: -75px;
      left: 80px;
      width: 135px;
      height: 130px;
      cursor: pointer;
      position: absolute;
      border-radius: 50%;
      transition: transform 2.1s;
    }
    img:hover {
        -ms-transform: scale(1.5);
        -webkit-transform: scale(1.5);
        transform: scale(1.3);        
    }
    @media (max-width: 400px) {
      width: 280px;
      img {
        left: 70px;
        width: 135px;
        height: 135px;
      }
    }
    margin: 20px 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const FriendsImage = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
`;

const Text = styled.div`
  height: 190px;
  color: ${GREY};
  line-height: 26px;
  font-style: italic;
  text-align: justify;
  padding: 90px 20px 10px 20px;
  background-color: ${WHITE};
  margin: 0 15px 15px 15px;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 950px){
    width: unset;
  }
  @media (max-width: 400px) {
    padding: 90px 20px 10px 20px;
  }
`;

const Name = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  color: ${WHITE};
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${LIGHT_BLACK};
  :hover {
    background: ${BLUE_1};
  }
`;

const Contant = styled.div`
  color: ${GREY};
  margin-top: 70px;
`;

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <AngleRightArrow
      className={"fa fa-angle-right fa-1x content-prev-arrow"}
      onClick={onClick}
      aria-hidden="true"
      availability={className}
    ></AngleRightArrow>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <AngleLeftArrow
      className={"fa fa-angle-left fa-1x content-next-arrow"}
      onClick={onClick}
      aria-hidden="true"
      availability={className}
    ></AngleLeftArrow>
  );
}

const Carsouel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (

    <Container>
      <Slider {...settings}>
        {FriendsCarsouel.map((value, i) => {
          return (
            <div className="crausoel_container" key={i}>
              <img src={value.img} className="crausoel_image" alt="img-jpg" />
            </div>
          );
        })}
      </Slider>
      <FriendsList>
        <div className="title"> My Friends </div>
        <FriendsImage>
          {CardData.map((data, index) => {
            return (
              <Contant key={index}>
                <ListData>
                  <img src={data.image} alt="card-jpg" />
                  <Text>{data.text}</Text>
                  <div className="justify-center">
                    <Name>{data.name}</Name>
                  </div>
                </ListData>
              </Contant>
            )
          })}
        </FriendsImage>
      </FriendsList>
    </Container>
  )
}

export default Carsouel
