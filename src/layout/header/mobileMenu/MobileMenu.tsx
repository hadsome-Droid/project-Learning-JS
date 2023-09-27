import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import angel from "../../../assets/images/different/angel-wings-svgrepo-com.svg"


export const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () =>{
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{
                setMenuIsOpen(false)
            }}>
                <ul>
                    <ListItem>Пункт меню 1</ListItem>

                    <ListItem>ДЗ/HomeWork</ListItem>

                    <ListItem>Пункт меню 3</ListItem>

                    <ListItem>Пункт меню 4</ListItem>
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
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  font-size: 24px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    gap: 60px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    }
  }

`

const ListItem = styled.li`
  display: block;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 157px;
    height: 2px;
    background-color: ${theme.color.fontSecondary};
    position: absolute;
    bottom: -4px;
    left: 3px;
    z-index: 99999
  }
  // &:after {
  //   content: '';
  //   display: block;
  //   width: 8px;
  //   height: 8px;
  //   border-radius: 50%;
  //   background-color: ${theme.color.fontSecondary};
  //   position: absolute;
  //   bottom: -7px;
  //   left: 78px;
  //   z-index: 99999;
  // }
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background-color: ${theme.color.fontSecondary};
    position: absolute;
    bottom: -10px;
    left: 31px;
    z-index: 99999;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -115px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999;

  span {
    display: block;
    width: 36px;
    height: 3px;
    background-color: ${theme.color.fontSecondary};
    position: absolute;
    left: 40px;
    bottom: 50px;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}

    &:before {
      content: '';
      display: block;
      width: 36px;
      height: 3px;
      background-color: ${theme.color.fontSecondary};
      position: absolute;
      transform: translateY(-10px);
      
      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
    `}
    }

    &:after {
      content: '';
      display: block;
      width: 25px;
      height: 3px;
      background-color: ${theme.color.fontSecondary};
      position: absolute;
      transform: translateY(10px) translateX(10px);
      
      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
    `}
    }
  }
`
const PopupIcon = {

}