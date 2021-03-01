import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideMenu from './sidebar';
import Sidebar from './sidebar/Sidebar';
import styled from 'styled-components';
import MyAbout from './about';
import ContactUs from './contact';
import Services from './services';
import Resume from './resume';
import Portfolio from './portfolio';
import Friends from './friends';
import { colorCodes } from './constant/color';
import "react-toastify/dist/ReactToastify.css";
import './assets/scss/common.scss'
import NotFound from './NotFound';

const { BLUE_1 } = colorCodes

const Container = styled.div`
    margin: -8px;
`;

const ShowSideBarOrNot = styled.div`
    @media (max-width: 768px) {
        transition: 0.5s;
        display: ${props => props.showNavigation ? "block" : "none"} !important;
    }
`;

const MenuIcon = styled.i`
    display: block;
    @media (max-width:768px){
        right: 0;
        float: right;
        display: block;
        font-size: 30px;
        color: grey;
        z-index: 999999;
        cursor: pointer;
        position: absolute;
        margin: 15px 45px;
        :hover {
            color: ${BLUE_1};
        }
    }
    i {
        position: fixed;
    }
`;

export class App extends Component {
    constructor(props) {
        super(props);
        this.winWrapper = React.createRef()
        this.state = {
            showMenuNavigation: false
        }
    }

    componentDidMount = () => document.addEventListener('click', this.handleClickOutside)

    componentWillUnmount = () => document.removeEventListener('click', this.handleClickOutside)

    handleClickOutside = event => {
        const elemWrapper = this.winWrapper
        if (!!elemWrapper && elemWrapper.current !== null && !elemWrapper.current.contains(event.target)) {
            this.setState({ showMenuNavigation: false })
        }
    }

    ShowMenuBar = () => this.setState({ showMenuNavigation: !this.state.showMenuNavigation })

    render() {
        const { showMenuNavigation } = this.state
        return (
            <Container>
                <Router>
                    <ShowSideBarOrNot showNavigation={showMenuNavigation}>
                        <Sidebar />
                    </ShowSideBarOrNot>
                    <MenuIcon ref={this.winWrapper}
                        onClick={() => this.ShowMenuBar()}>
                        {!showMenuNavigation ? <i className="fas fa-bars"></i> : <i className="fal fa-times"></i>}
                    </MenuIcon>
                    <Switch>
                        <Route exact path="/"><SideMenu /></Route>
                        <Route path="/about"><MyAbout /></Route>
                        <Route path="/resume"><Resume /></Route>
                        <Route path="/contact"><ContactUs /></Route>
                        <Route path="/services"><Services /></Route>
                        <Route path="/friends"><Friends /></Route>
                        <Route path="/portfolio"><Portfolio /></Route>
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Container>
        )
    }
}

export default App