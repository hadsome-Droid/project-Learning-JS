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
                    </NavLink></li>
                <li>
                    <NavLink to={'/homeWork'}>
                        ДЗ/HomeWork
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/manual'}>
                      Мануал
                    </NavLink>
                </li>
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