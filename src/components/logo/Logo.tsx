import React from 'react';
import styled from "styled-components";
import logo from "../../assets/images/icons8-react.svg"

export const Logo = () => {
    return (
        <StyledLogo href="">
            <img src={logo} alt=""/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`

`