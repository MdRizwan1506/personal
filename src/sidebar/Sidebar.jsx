import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { colorCodes } from '../constant/color'

const { WHITE, BLUE_1, LIGHT_BLACK, ALICEBLUE } = colorCodes

const Container = styled.div`
    position: fixed;
    height: 100%;
    width: 270px;
    padding: 0 15px;
    background: #040b14;
    transition: 0.3s;
    overflow-y: auto;
    z-index: 9999;
    top: 0;
    left: 0;
    overflow-x: hidden;
    color: ${WHITE};
    font-family: "Poppins", sans-serif;
    ::-webkit-scrollbar {
        width: 0px;
    }
    .icon {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        background: ${LIGHT_BLACK};
        color: ${WHITE};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {
            color: ${WHITE};
            cursor: pointer;
            background: ${BLUE_1};
            text-decoration: none;
        }
    }
    display: block;
    @media (max-width: 600px){
        width: 100%;
        padding: unset;
        transition: 0.5s;
    }
`;

const Name = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`;

const Icon = styled.div`
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    @media (max-width: 500px){
        padding: 0px 30px;
        justify-content: space-between;
    }
`;

const Image = styled.img`
    width: 120px;
    height: 120px;
    display: block;
    margin: 20px auto;
    border-radius: 50%;
    border: 4px solid #2c2f3f;
    transition: transform 2.1s;
    :hover {
        opacity: .9;
        cursor: pointer;
        transform: scale(1.2); 
    }
`;

const ListItems = styled.div`
    padding-top: 20px;
    .selectted-list-item {
        color: ${WHITE} !important;
        i {
            color: ${BLUE_1};
        }
    }
    .list-items {
        color: #a8a9b4;
        padding: 12px 15px;
        margin-bottom: 8px;
        transition: 0.3s;
        font-size: 18px;
        font-family: "Open Sans", sans-serif;
        :hover {
            color: ${WHITE};
            i {
                color: ${BLUE_1};
            }
            cursor: pointer;
            text-decoration: none;
        }
        i {
            margin-right: 10px;
            font-size: 20px;
        }
    }
    .list_items {
        @media (max-width: 500px){
            padding-left: 20px;
        }
    }
`;

const FooterContant = styled.div`
    margin-top: 30px;
    padding: 20px 0px 30px 0px;
    border-top: 1px solid ${ALICEBLUE};
`;

const Contant = styled.div`
    text-align: center;
    line-height: 30px;
    color: #a8a9b4;
    font-family: "Playfair Display", serif;
    span {
        font-size: 18px;
        color: ${WHITE};
        font-weight: bold;
    }
    label {
        color: ${ALICEBLUE};
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

const Sidebar = ({ history }) => {
    const [selectedList, setSelectedList] = useState('home')
    
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);

    const selectListItem = e => {
        setSelectedList(e.target.id)
    }

    return (
        <Container>
            <div>
                <Image src={require(`../assets/IMG2.jpg`)} />
                <Name>Md Rizwan</Name>
                <Icon>
                    <div className="icon"><i className="fab fa-twitter"></i></div>
                    <div className="icon"><i className="fab fa-facebook-f"></i></div>
                    <div className="icon"><i className="fab fa-instagram"></i></div>
                    <div className="icon"><i className="fab fa-skype"></i></div>
                    <div className="icon"><i className="fab fa-linkedin-in"></i></div>
                </Icon>
            </div>
            <ListItems onClick={(e) => selectListItem(e)}>
                <div className="list_items">
                    <div id="home" onClick={() => history.push('/')} className={`list-items ${selectedList === 'home' ? 'selectted-list-item' : null}`}><i className="fas fa-home"></i>Home</div>
                    <div id="about" onClick={() => history.push('/about')} className={`list-items ${selectedList === 'about' ? 'selectted-list-item' : null}`}><i className="fas fa-address-card"></i>About</div>
                    <div id="resume" onClick={() => history.push('/resume')} className={`list-items ${selectedList === 'resume' ? 'selectted-list-item' : null}`}><i className="fas fa-file"></i>Resume</div>
                    <div id="portfolio" onClick={() => history.push('/portfolio')} className={`list-items ${selectedList === 'portfolio' ? 'selectted-list-item' : null}`}><i className="fas fa-server"></i>Portfolio</div>
                    <div id="services" onClick={() => history.push('/services')} className={`list-items ${selectedList === 'services' ? 'selectted-list-item' : null}`}><i className="fab fa-servicestack"></i>Services</div>
                    <div id="friends" onClick={() => history.push('/friends')} className={`list-items ${selectedList === 'friends' ? 'selectted-list-item' : null}`}><i className="fas fa-users"></i>My Friends</div>
                    <div id="contact" onClick={() => history.push('/contact')} className={`list-items ${selectedList === 'contact' ? 'selectted-list-item' : null}`}><i className="fas fa-id-badge"></i>Contact</div>
                </div>
                <FooterContant>
                    <Contant>
                        © Copyright <span>Personal-Project</span> <br />
                        Designed by <label>Md Rizwan</label>
                    </Contant>
                </FooterContant>
            </ListItems>
        </Container >
    )
}

export default withRouter(Sidebar)