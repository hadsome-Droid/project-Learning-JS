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
        isFunc: false

    },
    {
        itemId: '2',
        itemInfo: 'Создай массив из трёх елементов с типом данных number!',
        itemName: 'func2',
        isFunc: false

    },
    {
        itemId: '3',
        itemInfo: 'Создай массив из десяти елементов с типом данных string, number, boolean!',
        itemName: 'func3',
        isFunc: false

    },
    {
        itemId: '4',
        itemInfo: 'Дана функция которая принемает в параметрах какую-то строку, Задача: функция должна преобразовать эту строку в массив!',
        itemName: 'setArr',
        funcData: 'Чижик-пыжик где ты был!?',
        funcParam: 'str',
        correctResult: '[ \'Чижик-пыжик\', \'где\', \'ты\', \'был!?\' ]',
        isFunc: true

    },
    {
        itemId: '5',
        itemInfo: 'Дана функция которая принемает в параметрах два параметра, Задача: функция должна вернуть новый массив который будет включать в себя значения этих двух параметров!',
        itemName: 'conArr',
        isFunc: true,
        funcData: '[\'one\', \'two\', \'three\'], [1, 2, 3]',
        funcParam: 'a, b',
        correctResult: '[ \'one\', \'two\', \'three\', 1, 2, 3 ]',
    },
    {
        itemId: '6',
        itemInfo: 'Дана функция которая принемает в параметрах какую-то строку, Задача: Преобразуй страку в массив  в котором каждый НЕ ЧЁТНЫЙ элемент переведен в заглавные буквы!',
        itemName: 'upFunc',
        isFunc: true,
        funcData: 'one two three four five',
        funcParam: 'str',
        correctResult: '[ \'ONE\', \'two\', \'THREE\', \'four\', \'FIVE\' ]',

    },

]

export const HomeWork = () => {
    return (
        <StyledHomeWork>
            <Container>
                <Title title={'Домашние задание'}/>
                <FlexWrapper items={'center'} content={'space-around'} wrap={'wrap'} gap={'20px'}>

                    {homeWorkItem.map((h) => {
                        return (
                            <Task nameFuncTask={h.itemName} taskDescription={h.itemInfo} taskNumber={h.itemId}
                                  isFunc={h.isFunc}
                            funcData={h.funcData}
                            funcParam={h.funcParam}
                            correctResultTusk={h.correctResult}/>
                        )
                    })}
                </FlexWrapper>

            </Container>
        </StyledHomeWork>
    );
};

const StyledHomeWork = styled.section`
  
  ${Container}{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 0;
    
  }

  @media ${theme.media.tablet} {
    padding: 0 20px;
  }
`
