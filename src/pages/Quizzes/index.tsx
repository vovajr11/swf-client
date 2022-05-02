import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getQuizzesByModuleId } from '@api/quizzes/getQuizzes';
import { TQuiz } from '@interfaces/quizToChooseTheCorrectAnswer.interface';
import { Title } from './QuizzesStyles';

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

      <div>
        <h2>Вибрати одну вірну відповідь</h2>
        <ul>
          {quizzes?.map(({ _id, name, quizType }) => {
            if (quizType === 'chooseTheCorrectAnswer') {
              return (
                <li>
                  <h3>{name}</h3>
                  <button>
                    <Link to={`${currentURL}/${name}/${_id}`}>Почати</Link>
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div>
        <h2>Тестовий</h2>
        <ul>
          {quizzes?.map(quiz => {
            if (quiz.quizType === 'testType') {
              return <li>{quiz.name}</li>;
            }
          })}
        </ul>
      </div>
    </>
  );
};
