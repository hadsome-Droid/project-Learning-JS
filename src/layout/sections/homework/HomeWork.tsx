import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const HomeWork = () => {
    return (
        <StyledHomeWork>
            <Container>
                <Title title={'Домашние задание'}/>
                <FlexWrapper direction={'column'} content={'center'} items={'center'}>
                    <span>const a = 4;</span>
                    <p>

                        const myFunc (a, b) ={'>'} {'{'}
                            return a + b
                        {'}'}
                    </p>
                </FlexWrapper>
            </Container>
        </StyledHomeWork>
    );
};

const StyledHomeWork = styled.section`

  p {
    color: ${theme.color.fontPrimary};
  }
`