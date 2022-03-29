import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '@hooks/appHook';
import Button from '@components/Button';
import { IItem } from '@interfaces/course.interface';
import { List, Item, Content } from './CourseDetailsStyles';
import coursePrevImg from '@assets/img/coursePrevImg.jpg';
import { getCourseById } from '../../api/course';
import ModuleChapters from './components/ModuleChapters';

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
          console.log(chapters, 'chapters');

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
    </>
  );
};
