import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

type TaskPropsType = {
    taskNumber: string
    taskDescription: string
    nameFuncTask: string
    funcParam?: string
    funcData?: string
    correctResultTusk?: string
}

export const Task = (props: TaskPropsType) => {

    return (
        <StyledTask>
            <TaskNumber>ДЗ №{props.taskNumber}</TaskNumber>
            <FlexWrapper direction={'column'} content={'center'} items={'center'} gap={'10px'}>
                <TaskDescription>{props.taskDescription}</TaskDescription>
                <TaskFunc>
                    const {props.nameFuncTask} = ({props.funcParam}) ={'>'} {'{'}
                       <span>  return {props.funcParam}</span>
                    <span>{'}'}</span>
                </TaskFunc>
                <CallTaskFunc>
                    console.log({props.nameFuncTask}({props.funcData}), {props.correctResultTusk})
                </CallTaskFunc>
            </FlexWrapper>
        </StyledTask>
    );
};

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  width: 100%;
  height: 300px;
  padding: 20px 10px 0 10px;
  border: 10px double #57422c;
  border-radius: 20px;
`
const TaskNumber = styled.h4`
  color: ${theme.color.fontAccent};
`
const TaskDescription = styled.p`
text-align: center;
`
const TaskFunc = styled.p`
  span{
    display: block;
  }
`
const CallTaskFunc = styled.p`

`