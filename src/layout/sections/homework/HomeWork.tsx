import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Task} from "../../../components/task/Task";

const homeWorkItem = [
    {
        itemId: '1',
        itemInfo: 'Создай массив из пяти елементов с типом данных string!',
        itemName: 'func1',

    },
    {
        itemId: '2',
        itemInfo: 'Создай массив из трёх елементов с типом данных number!',
        itemName: 'func2',

    },
    {
        itemId: '3',
        itemInfo: 'Создай массив из десяти елементов с типом данных string, number, boolean!',
        itemName: 'func3',

    },

]

export const HomeWork = () => {
    return (
        <StyledHomeWork>
            <Container>
                <Title title={'Домашние задание'}/>
                <FlexWrapper items={'center'} content={'space-around'} >

                    {homeWorkItem.map((h) =>{
                        return(
                            <Task nameFuncTask={h.itemName} taskDescription={h.itemInfo} taskNumber={h.itemId}/>
                        )
                    })}
                </FlexWrapper>

            </Container>
        </StyledHomeWork>
    );
};

const StyledHomeWork = styled.section`
  
  
  
  p {
    color: ${theme.color.fontPrimary};
  }

  @media ${theme.media.tablet}{
    padding: 0 20px;
  }
`