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
import checkRight from "../../../assets/images/check_right.png"
import createFolder from "../../../assets/images/create_folder.webp"
import lookHere from "../../../assets/images/look_here.png"
import projectPage from "../../../assets/images/project_page.png"
import shhLink from "../../../assets/images/shh_key.png"
import sshGeneration from "../../../assets/images/sshGeneration/ssh_generation.png"
import ssh1 from "../../../assets/images/sshGeneration/ssh_1.png"
import ssh2 from "../../../assets/images/sshGeneration/ssh_2.png"
import ssh3 from "../../../assets/images/sshGeneration/ssh_3.png"
import ssh_4 from "../../../assets/images/sshGeneration/shh_4.png"
import ssh6 from "../../../assets/images/sshGeneration/ssh_6.png"
import ssh7 from "../../../assets/images/sshGeneration/ssh_7.png"
import ssh8 from "../../../assets/images/sshGeneration/ssh_8.png"
import ssh9 from "../../../assets/images/sshGeneration/ssh_9.png"
import ssh10 from "../../../assets/images/sshGeneration/ssh_10.png"
import startGitBash from "../../../assets/images/start_gitbash.png"
import writenCommand from "../../../assets/images/writen_comand.png"
import {theme} from "../../../styles/Theme";


export const Manual = () => {
    return (
        <StyledSetGit>
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
                    <ManualText>В появившемся терминале нужно ввести команды для подключения профиля
                        с <span> GitHub</span> и компьютера! Команды вводить после знака <span> $</span> !</ManualText>
                    <ImgWrapper>
                        <img src={showHere} alt=""/>
                    </ImgWrapper>
                    <ManualText>Какие команды вводить и где их взять? Жми <a
                        href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup"
                        target={'_blank'} rel="noreferrer">сюда</a> ! После перехода прокрути страницу чуть ниже и ты
                        увидишь нужные
                        команды как на картинке на которые указывает стрелочка! Эти команды нужно вводить по очереди при
                        этом нужно заменить дефолтное имя пользователя <span>"John Doe"</span> на своё после чего
                        жмём <span> Enter</span>, также нужно сделать и c <span> email</span> указав свой заместо
                        имеющегося! В терминале <span> Git</span> чтобы вставить скопированную команду нужно
                        нажать <span> "Shift + Insert"</span> ! </ManualText>
                    <ImgWrapper>
                        <img src={checkRight} alt=""/>
                    </ImgWrapper>
                    <ManualText>Также нужно копировать команды до знака <span>$</span> так как знак <span>$</span> уже
                        есть в терминале! Команда для проверки всё ли мы указали
                        правильно <span> git config --list</span> , если всё хорошо то в
                        строках <span>user.name</span> и <span>user.email</span> будет указаны те данные которые мы
                        вводили ранее!</ManualText>
                </FlexWrapper>


                <Title title={'Шаг Второй!'}/>
                <FlexWrapper direction={'column'} content={'center'} items={'center'} gap={'30px'}>
                    <h4>Генерация SSH ключа!</h4>
                    <ImgWrapper>
                        <img src={sshGeneration} alt=""/>
                    </ImgWrapper>
                    <ManualText>На втором шаге тебе нужно с генерировать <span>SSH ключ</span> без него запуск проекта
                        на другом компьютере будет не возможен! Для генерации SSH ключа нужно ввести эту команду <span>ssh-keygen -t ed25519 -C "your_email@example.com"</span> в
                        терминале GitBash который у тебя открыт на рабочем столе, если ты его закрыл открывай заново!
                        Так же не забудь указать в кавычках свой Email заместо
                        этого <span> your_email@example.com</span> ! Так же вот ссылка на страницу где можно почитать
                        про генерацию SSH ключа. <a
                            href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
                            target={'_blank'} rel="noreferrer"> Жми Сюды</a>!</ManualText>
                    <ImgWrapper>
                        <img src={ssh1} alt=""/>
                    </ImgWrapper>
                    <ManualText>После того как ты ввёл команду и нажал <span>Enter</span> появится эта запись в которой
                        говорится что будет сгенерировано два SSH ключа приватный и публичный, тебе нужно нажать еще
                        раз <span>Enter</span> !</ManualText>
                    <ImgWrapper>
                        <img src={ssh2} alt=""/>
                    </ImgWrapper>
                    <ManualText>Далее, так как у меня уже был SSH ключ то появится эта запись , в корой спрашивается
                        уверен ли что хочу перезаписать SSH ключ тут нужно в вести букву <span> у</span> которая
                        подразумевает
                        согласие(<span>yes</span>), <span>У тебя этой записи не будет двигайся дальше!</span>
                    </ManualText>
                    <ImgWrapper>
                        <img src={ssh3} alt=""/>
                    </ImgWrapper>
                    <ImgWrapper>
                        <img src={ssh_4} alt=""/>
                    </ImgWrapper>
                    <ManualText>Теперь тебе предлагается установить какую-то кодовою фразу если ты её установишь то
                        будешь каждый раз в водить поэтому жми просто <span> Enter</span>, тебе еще раз предлагают
                        повторить кодовую фразу жми Enter и двигайся дальше!
                    </ManualText>
                    <ImgWrapper>
                        <img src={ssh6} alt=""/>
                    </ImgWrapper>
                    <ManualText>Если всё хорошо то ты увидишь такую же запись как на скрине в терминале, далее тебе
                        нужно пройти по указанному пути который показывают стрелочки в папку где лежать SSH ключи ! Тут
                        ничего сложного!
                    </ManualText>
                    <ImgWrapper>
                        <img src={ssh7} alt=""/>
                    </ImgWrapper>
                    <ManualText>Зайдя в папку <span> .ssh</span> тебе нужно выбрать файл с
                        расширением <span> PUB</span> клацнуть правой кнопкой мыши и открыть с
                        помощью <span> Notepad++</span> !
                    </ManualText>
                    <ImgWrapper>
                        <img src={ssh8} alt=""/>
                    </ImgWrapper>
                    <ManualText>Теперь скопируй <span>SSH ключ</span>!
                    </ManualText>
                    <ImgWrapper>
                        <img src={ssh9} alt=""/>
                    </ImgWrapper>
                    <ManualText>Далее переходи по этой ссылки <a
                        href="https://github.com/settings/keys"
                        target={'_blank'} rel="noreferrer"> Жми Сюды</a> , На сайте жмякай <span>New SSH key</span> !
                    </ManualText>
                    <ImgWrapper>
                        <img src={ssh10} alt=""/>
                    </ImgWrapper>
                    <ManualText>В графе <span> Title</span> укажи любое название ключа главное чтобы ты понимал где
                        какой, далее в графе <span> Key</span> вставь скопированный SSH ключ с
                        помощью <span> ctrl+v</span> или правая кнопка мыши <span> Вставить</span>, после жмякай <span> Add SSH key</span> !
                        И на этом с генерацией закончили!
                    </ManualText>
                </FlexWrapper>


                <Title title={'Шаг Третий!'}/>
                <FlexWrapper direction={'column'} content={'center'} items={'center'} gap={'30px'}>
                    <h4>Клонирование проекта!</h4>
                    <ImgWrapper>
                        <img src={createFolder} alt=""/>
                    </ImgWrapper>
                    <ManualText>После проделанных манипуляций пришло время для клонирование проекта! Для этого идем в
                        диск <span>D</span> и там создаём папку с название на Английском языке. Назвать папку можно как
                        угодно главное чтобы тебе было понятно!</ManualText>
                    <ImgWrapper>
                        <img src={lookHere} alt=""/>
                    </ImgWrapper>
                    <ManualText>Далее идём на <span>GitHub</span> <a href="https://github.com/" target={'_blank'} rel="noreferrer">Жми Сюды</a> Ты
                        попадёшь на эту страницу где будут указаны твои проект(ы). Выбираешь нужный и жмёшь на
                        него</ManualText>
                    <ImgWrapper>
                        <img src={projectPage} alt=""/>
                    </ImgWrapper>
                    <ImgWrapper>
                        <img src={shhLink} alt=""/>
                    </ImgWrapper>
                    <ManualText>Ну тут всё понятно жмём на зеленую кнопку <span>Code</span> , после чего откроется
                        вкладка вне нужно выбрать SSH после жмякнуть куда указывает <span>синяя стрелка!</span>
                    </ManualText>
                    <ImgWrapper>
                        <img src={startGitBash} alt=""/>
                    </ImgWrapper>
                    <ManualText>Теперь вернись в созданную папку и открой терминал в этой папке!
                    </ManualText>
                    <ImgWrapper>
                        <img src={writenCommand} alt=""/>
                    </ImgWrapper>
                    <ManualText>В терминале напиши <span> git clone</span> и вставь скопированную строку, напоминаю сочетание кнопок для вставки <span> Shift + Insert</span> после чего жми <span> Enter</span>. И на этом всё!
                    </ManualText>
                </FlexWrapper>
            </Container>
        </StyledSetGit>
    );
};

const StyledSetGit = styled.section`
  background-color: #1f1f1f;
  padding-bottom: 50px;
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

  a {
    color: #b04c3c;
  }

  h4 {
    color: #b04c3c;
  }

  @media ${theme.media.tablet}{
    padding: 0 20px;
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