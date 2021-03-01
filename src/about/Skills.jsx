import React from 'react'
import styled from 'styled-components'
import { colorCodes } from '../constant/color';

const { BLUE_1, GREY } = colorCodes

const Container = styled.div`
    background: #f5f8fd;
    box-sizing: border-box;
    padding: 10px 20px 40px 20px;
`;

const Text = styled.div`
    color: ${GREY};
    line-height: 26px;
    padding-bottom: 40px;
`;

const SkillsDiv = styled.div`
    display: flex;
    padding-bottom: 50px;
span {
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: ${GREY};
    font-size: 14px;
}
.skills-container {
    width: 100%;
    background-color: #ddd;
}
@media(max-width:768px){
    display: unset;
}
`;

const Design = styled.div`
    width: 50%;
    line-height: 40px;
    padding-right: 15px;
    @media(max-width:768px) {
        width: 100%;
        padding-right: unset;
    }
`;

const Language = styled.div`
    width: 50%;
    line-height: 40px;
    padding-left: 15px;
    @media(max-width:768px) {
        width: 100%;
        padding-left: unset;
    }
`;

const LanguageSkills = styled.div`
    width: ${props => props.skills && props.skills}%;
    height: 10px;
    background-color: ${BLUE_1};
`;

const DesignList = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FragmentDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Skills = () => {
    return (
        <Container>
            <div className="title">Skills</div>
            <Text>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Text>
            <SkillsDiv>
                <Design>
                    <FragmentDiv>
                        <span>HTML</span>
                        <span>100%</span>
                    </FragmentDiv>
                    <DesignList className=" skills-container " >
                        <LanguageSkills skills={100}></LanguageSkills>
                    </DesignList>
                    <FragmentDiv>
                        <span>PYTHON</span>
                        <span>30%</span>
                    </FragmentDiv>
                    <DesignList className="skills-container">
                        <LanguageSkills skills={30} ></LanguageSkills>
                    </DesignList>
                    <FragmentDiv>
                        <span>CSS</span>
                        <span>70%</span>
                    </FragmentDiv>
                    <DesignList className="skills-container">
                        <LanguageSkills skills={70}></LanguageSkills>
                    </DesignList>
                </Design>
                <Language>
                    <FragmentDiv>
                        <span>JAVASCRIPT</span>
                        <span>75%</span>
                    </FragmentDiv>
                    <DesignList className="skills-container">
                        <LanguageSkills skills={75}></LanguageSkills>
                    </DesignList>
                    <FragmentDiv>
                        <span>REACT</span>
                        <span>80%</span>
                    </FragmentDiv>
                    <DesignList className="skills-container">
                        <LanguageSkills skills={80}></LanguageSkills>
                    </DesignList>
                    <FragmentDiv>
                        <span>PHP</span>
                        <span>35%</span>
                    </FragmentDiv>
                    <DesignList className="skills-container">
                        <LanguageSkills skills={35}></LanguageSkills>
                    </DesignList>
                </Language>
            </SkillsDiv>
        </Container >
    )
}

export default Skills