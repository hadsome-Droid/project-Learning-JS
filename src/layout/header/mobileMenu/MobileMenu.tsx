import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup>
                <ul>
                    <li>Пункт меню 1</li>
                    <li>Пункт меню 2</li>
                    <li>Пункт меню 3</li>
                    <li>Пункт меню 4</li>
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  

  @media ${theme.media.tablet} {
    display: block;
  }
`
const MobileMenuPopup = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.87);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

`

const BurgerButton = styled.button`
  position: fixed;
  top: -100px;
  left: -100px;
  width: 200px;
  height: 200px;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.color.fontSecondary};
    position: absolute;
    left: 40px;
    bottom: 50px;

    &:before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.fontSecondary};
      position: absolute;
      transform: translateY(-10px);
    }

    &:after {
      content: '';
      display: block;
      width: 25px;
      height: 2px;
      background-color: ${theme.color.fontSecondary};
      position: absolute;
      transform: translateY(10px);
    }
  }
`