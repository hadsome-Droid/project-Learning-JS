import React from 'react';
import {Container} from "../../../components/container/Container";
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {FlexWrapper} from "../../../components/FlexWrapper";
import search from "../../../assets/images/search_gitBash.png"
import pushHere from "../../../assets/images/push_here.webp"
import openGitBash from "../../../assets/images/open_GitBash.webp"
import writenHere from "../../../assets/images/writen_here.png"
import showHere from "../../../assets/images/show_here.png"
import {theme} from "../../../styles/Theme";


export const Manual = () => {
    return (
        <StyledManual>
            <Container>
                <Title title={'Начало Пути!'}/>
                <FlexWrapper direction={'column'} content={'center'} items={'center'} gap={'30px'}>
                    <h4>Установка <span>Git Bash</span> !</h4>
                    <ImgWrapper>
                        <img src={search} alt=""/>
                    </ImgWrapper>
                    <ManualText>В поисковой строке пишем <span> gitbash</span> , жмём <span> enter</span> и видим
                        результат поиска нам нужен вот этот сайт указанный стрелочкой! Переходим по ссылке.</ManualText>
                    <ImgWrapper>
                        <img src={pushHere} alt=""/>
                    </ImgWrapper>
                    <ManualText>Здесь нас интересует кнопка <span> Download for Windows</span> на которую указывает
                        стрелочка! Жмём на неё и после скачивания устанавливаем , При установке жмём
                        постоянно <span> Next</span> в
                        конце жмём <span> Install</span> !</ManualText>
                    <ImgWrapper>
                        <img src={openGitBash} alt=""/>
                    </ImgWrapper>
                    <ManualText>После установки идём на рабочий стол и жмём правую кнопку мыши в появившемся окне жмём
                        на <span>' Open Git Bash here'</span> на которую указывает стрелочка!</ManualText>
                    <ImgWrapper>
                        <img src={writenHere} alt=""/>
                    </ImgWrapper>
                    <ManualText>В появившемся терминале нужно ввести команды для подключения профиля с <span> GitHub</span> и компьютера! Команды вводить после знака <span> $</span> !</ManualText>
                    <ImgWrapper>
                        <img src={showHere} alt=""/>
                    </ImgWrapper>
                    <ManualText>Какие команды вводить и где их взять? Жми <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target={'_blank'}>сюда</a> ! После перехода прокрути страницу чуть ниже и ты увидишь нужные команды как на картинке на которые указывает стрелочка!  Эти команды нужно вводить по очереди при этом нужно заменить дефолтное имя пользователя <span>"John Doe"</span>  на своё после чего жмём <span> Enter</span>, также нужно сделать и c <span> email</span>  указав свой заместо имеющегося! В терминале <span> Git</span> чтобы вставить скопированную команду нужно нажать <span> "Shift + Insert"</span> ! </ManualText>

                </FlexWrapper>

            </Container>
        </StyledManual>
    );
};

const StyledManual = styled.section`
  background-color: #1f1f1f;

  ${Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-top: 20px;
    color: #7a90ef;
    font-size: 18px;
  }
`
const ImgWrapper = styled.div`
  max-width: 925px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ManualText = styled.p`
  max-width: 925px;
  text-align: center;

  span {
    color: ${theme.color.fontSecondary};
  }
`