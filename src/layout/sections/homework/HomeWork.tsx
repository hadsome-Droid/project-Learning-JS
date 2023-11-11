import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Task} from "../../../components/task/Task";
import {homeWorkState} from "../../../data/dataState";


export const HomeWork = () => {
    return (
        <StyledHomeWork>
            <Container>
                <Title title={'Домашние задание'}/>
                <FlexWrapper items={'center'} content={'space-around'} wrap={'wrap'} gap={'20px'}>

                    {homeWorkState.map((h) => {
                        return (
                            <Task
                                key={h.id}
                                taskNumber={h.id}
                                nameFuncTask={h.nameTask}
                                taskDescription={h.infoTask}
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

  ${Container} {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 0;

  }

  @media ${theme.media.tablet} {
    padding: 0 20px;
  }
`
