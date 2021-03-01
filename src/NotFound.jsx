import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { colorCodes } from './constant/color';
import { devices } from './constant/devices';

const { BLUE_1 } = colorCodes

const Container = styled.div`
    height: 100vh;
    font-size: 35px;
    text-align: center;
    margin: 0px 30px;
    flex-direction: column;
`;
const GoToHomeButton = styled.button`
  width: 50%;
  max-width: 350px;
  :hover {
    cursor: pointer;
    background: ${BLUE_1};
  }
  @media ${devices.mobile} {
      width: 90%;
  }
`;

const NotFound = ({history}) => (
    <Container className="center-flex container">
        <div className="heading3">On no! The page you're looking for couldn't be found</div>
        <GoToHomeButton className="mt-30 common-button" onClick={() => history.push('/')}>TAKE ME HOME</GoToHomeButton>
    </Container>
)

export default withRouter(NotFound)