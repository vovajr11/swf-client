import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import coursePrevImg from '@assets/img/coursePrevImg.jpg';
import { IItem } from '@interfaces/course.interface';
import { List, Item, Content } from './CourseDetailsStyles';
import { getCourseById } from '@api/course';
import ModuleChapters from './components/ModuleChapters';
import Quiz from './components/Quiz';

export const CourseDetails = () => {
  const { courseName, courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState<IItem | undefined>();

  useEffect(() => {
    (async () => {
      const { course } = await getCourseById(courseId);
      setCourseInfo(course);
    })();
  }, []);

  return (
    <>
      <h1>Деталі курсу: {courseName}</h1>
      <List>
        {courseInfo?.modules.map(({ _id, name, chapters }) => {
          return (
            <Item key={_id}>
              <img src={coursePrevImg} alt={name} />
              <Content>
                <h2>{name}</h2>
                <ModuleChapters chapters={chapters} />
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda iure nemo quibusdam, perspiciatis animi autem, quo
                  minus eveniet asperiores expedita, quia officiis error
                  accusamus cupiditate? Asperiores quis optio quod rerum.
                </p>
              </Content>
            </Item>
          );
        })}
      </List>
      <Quiz />
    </>
  );
};
