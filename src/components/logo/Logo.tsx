import React from 'react';
import styled from "styled-components";
// import logo from "../../assets/images/icons8-react.svg"
// import flame from "../../assets/images/different/flame-symbol.svg"
import logo2 from "../../assets/images/different/react.svg"

export const Logo = () => {
    return (
        <StyledLogo href="">
            <img src={logo2} alt=""/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`

`