import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import prev from "../../../assets/images/different/teacher_prev.webp"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainTitle>Зравствуй Ученик!</MainTitle>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-color: #1f1f1f;
  padding-top: 66px;
  
  ${Container} {
    display: flex;
    justify-content: center;
    background-image: url(${prev});
    background-repeat: no-repeat;
    background-size: cover;
    height: 65vh;
    padding-top: 10px;
    
  }
`
const MainTitle = styled.h2`
  color: #CDAA7D;
  font-family: Vazitsa, sans-serif;
font-size: 30px;
`