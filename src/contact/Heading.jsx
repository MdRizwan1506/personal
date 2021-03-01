import React from 'react'
import styled from 'styled-components';
import { colorCodes } from '../constant/color';

const Container = styled.div`
    padding: 0px 20px;
`;

const Text = styled.div`
    color: ${colorCodes.GREY};
    text-align: justify;
`;

const Heading = () => {
    return (
        <Container>
            <div className="title">Contact</div>
            <Text>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Text>
        </Container>
    )
}

export default Heading
