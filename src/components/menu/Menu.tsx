import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>Пункт меню 1</li>
                <li>Пункт меню 2</li>
                <li>Пункт меню 3</li>
                <li>Пункт меню 4</li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

  ul{
    display: flex;
    gap: 30px;
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }
`