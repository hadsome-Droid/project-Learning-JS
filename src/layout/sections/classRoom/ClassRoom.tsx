import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const ClassRoom = () => {
    return (
        <StyledClassRoom>
            Учебный класс
        </StyledClassRoom>
    );
};

const StyledClassRoom = styled.div`
  height: 100vh;
  background-color: ${theme.color.primaryBg};
  padding-top: 100px;
`