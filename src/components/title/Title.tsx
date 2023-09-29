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
   gap: 5px;

   h3 {
     font-family: Vazitsa, sans-serif;
     font-size: 25px;
     color: #CDAA7D;
   }
 `
const ImageWrapper = styled.div`
  width: 18px;
  height: 18px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`