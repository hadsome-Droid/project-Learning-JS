import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {NavLink} from "react-router-dom";

export const Error404 = () => {
    return (
        <StyledError>
            <span>Такая комната отсутствует Error404</span>
            <NavLink to={'/main'}>
                Вернутся в Главный Зал
            </NavLink>
        </StyledError>
    );
};

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.color.primaryBg};
  font-size: 30px;
  color: #a94501;
  
`