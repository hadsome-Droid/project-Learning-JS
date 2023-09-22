import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <h2>Привет Ученик!</h2>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-color: #c1f6b5;
  ${Container}{
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`