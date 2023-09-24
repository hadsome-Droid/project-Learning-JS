import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <h3>Конец!</h3>
            <small>© 2023 Сделано моими золотыми ручками!</small>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #111111;
  color: #CDAA7D;
`