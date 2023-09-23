import React from 'react';
import styled from "styled-components";
import fire from "../../assets/images/different/fire-symbol-svgrepo-com.svg"

type TitlePropsType ={
    title: string
}
export const Title = (props: TitlePropsType) => {
    return (
        <StyledTitle>
            <h3>{props.title}</h3>
            <ImageWrapper>
                <img src={fire} alt=""/>
            </ImageWrapper>
        </StyledTitle>
    );
};
 const StyledTitle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h3 {
     font-family: Vazitsa, sans-serif;
     color: #CDAA7D;
   }
 `
const ImageWrapper = styled.div`
  width: 15px;
  height: 15px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`