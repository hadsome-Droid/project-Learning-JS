import React from 'react';
import styled, {css} from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

type TaskPropsType = {
    taskNumber: string
    taskDescription: string
    nameFuncTask: string
    funcParam?: string
    funcData?: string
    correctResultTusk?: string
    isFunc: boolean
}

export const Task = (props: TaskPropsType) => {

    return (
        <StyledTask>
            <TaskNumber>ДЗ №{props.taskNumber}</TaskNumber>
            <FlexWrapper direction={'column'} content={'center'} items={'center'} gap={'10px'}>
                <TaskDescription>{props.taskDescription}</TaskDescription>
                <TaskFunc isFunc={props.isFunc}>
                    const {props.nameFuncTask} = ({props.funcParam}) ={'>'} {'{'}
                       <span>  return {props.funcParam}</span>
                    <span>{'}'}</span>
                </TaskFunc>
                <CallTaskFunc isFunc={props.isFunc}>
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
  min-height: 300px;
  padding: 20px 10px 10px 10px;
  border: 10px double #57422c;
  border-radius: 20px;

  p {
    color: ${theme.color.fontPrimary};
    font-size: 18px;
  }
`

const TaskNumber = styled.h4`
  color: ${theme.color.fontAccent};
`

const TaskDescription = styled.p`
  text-align: center;
`

const TaskFunc = styled.p<{ isFunc: boolean }>`
  display: none;
  
  ${props => props.isFunc && css<{isFunc: boolean}>`
    display: block;
  `}
  span{
    display: block;
  }
`

const CallTaskFunc = styled.p<{ isFunc: boolean }>`
  display: none;
  
  ${props => props.isFunc && css<{isFunc: boolean}>`
    display: block;
  `}
`
