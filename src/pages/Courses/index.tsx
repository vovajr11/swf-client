import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getDetailsOfAllCourses } from '@redux/courses/coursesAPI';
import { useAppSelector } from '@hooks/appHook';
import Button from '@components/Button';
import { CourseList, CourseItem, Content } from './CourseStyles';
import coursePrevImg from '@assets/img/coursePrevImg.jpg';

export const Courses = () => {
  const dispatch = useDispatch();
  const currentURL = useLocation().pathname;

  useEffect(() => {
    dispatch(getDetailsOfAllCourses());
  }, []);

  const courses = useAppSelector(state => state.courses.items);

  return (
    <>
      <h1>Всі курси</h1>
      <CourseList>
        {courses.map(({ name, description, modules, id }) => {
          return (
            <CourseItem key={id}>
              <img src={coursePrevImg} alt={name} />
              <Content>
                <h2>{name}</h2>
                <p className="number-of-modules">
                  Кількість модулів: <span>{modules.length}</span>
                </p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda iure nemo quibusdam, perspiciatis animi autem, quo
                  minus eveniet asperiores expedita, quia officiis error
                  accusamus cupiditate? Asperiores quis optio quod rerum.
                </p>

                <Button type="button">
                  <Link
                    to={{
                      pathname: `${currentURL}/${name}/${id}`,
                    }}
                  >
                    Деталі
                  </Link>
                </Button>
              </Content>
            </CourseItem>
          );
        })}
      </CourseList>
    </>
  );
};
