import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <NavLink to={'/main'}>
                        Холл
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/homeWork'}>
                        ДЗ/HomeWork
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/manual'}>
                      Гайд по Гиту
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/classroom'}>
                        Учебный Класс
                    </NavLink>
                </li>
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