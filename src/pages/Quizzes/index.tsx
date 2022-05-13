import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ExtensionIcon from '@mui/icons-material/Extension';
import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Button from '@components/Button';
import { getQuizzesByModuleId } from '@api/quizzes/getQuizzes';
import { TQuiz } from '@interfaces/quizzes.interface';
import {
  Title,
  QuizTypeWrapper,
  IconWrapper,
  ContentWrapper,
  QuizList,
  QuizItem,
  QuizName,
} from './QuizzesStyles';

export const Quizzes = () => {
  const currentURL = useLocation().pathname;
  let { moduleId, moduleName } = useParams();
  const [quizzes, setQuizzes] = useState<TQuiz[] | undefined>([]) || [];

  useEffect(() => {
    (async () => {
      const data = await getQuizzesByModuleId(moduleId);

      setQuizzes(data);
    })();
  }, []);

  return (
    <>
      <Title>Вікторини модуля: {moduleName}</Title>

      <QuizTypeWrapper>
        <h2>Вибрати одну вірну відповідь</h2>

        <QuizList>
          {quizzes
            ?.filter(quiz => quiz.quizType === 'chooseTheCorrectAnswer')
            .map(({ _id, name }) => (
              <QuizItem key={_id}>
                <IconWrapper>
                  <FormatListBulletedIcon />
                </IconWrapper>

                <ContentWrapper>
                  <QuizName>{name}</QuizName>
                  <Button type="button">
                    <Link
                      to={`${currentURL}/toChooseTheCorrectAnswer/${name}/${_id}`}
                    >
                      Почати
                    </Link>
                  </Button>
                </ContentWrapper>
              </QuizItem>
            ))}
        </QuizList>
      </QuizTypeWrapper>

      <QuizTypeWrapper>
        <h2>Переклад речення</h2>

        <QuizList>
          {quizzes
            ?.filter(quiz => quiz.quizType === 'translate-sentences')
            .map(({ _id, name }) => (
              <QuizItem key={_id}>
                <IconWrapper>
                  <GTranslateIcon />
                </IconWrapper>

                <ContentWrapper>
                  <QuizName>{name}</QuizName>
                  <Button type="button">
                    <Link
                      to={`${currentURL}/translateSentences/${name}/${_id}`}
                    >
                      Почати
                    </Link>
                  </Button>
                </ContentWrapper>
              </QuizItem>
            ))}
        </QuizList>
      </QuizTypeWrapper>
    </>
  );
};
