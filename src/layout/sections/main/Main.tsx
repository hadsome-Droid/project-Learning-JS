import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import prev from "../../../assets/images/different/teacher_prev.webp"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainTitle>Зравствуй Ученик! <span>Добро пожаловать в Школу Золотые Руки!</span> </MainTitle>
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
    height: 94vh;
    padding-top: 10px;
    
  }
`
const MainTitle = styled.h2`
  display: inline-block;
  width: 700px;
  color: #CDAA7D;
  font-family: Vazitsa, sans-serif;
font-size: 30px;
  text-align: center;
  
  
  & span {
    display: inline-block;
  }
`