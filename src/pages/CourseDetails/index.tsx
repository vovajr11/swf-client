import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Link, useLocation, useParams } from 'react-router-dom';
import coursePrevImg from '@assets/img/coursePrevImg.jpg';
import { IItem } from '@interfaces/course.interface';
import Button from '@components/Button';
import { List, Item, Content } from './CourseDetailsStyles';
import { getCourseById } from '@api/course';
import ModuleChapters from './components/ModuleChapters';

export const CourseDetails = () => {
  const currentURL = useLocation().pathname;
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
                <Box sx={{ display: 'flex', gap: '20px', margin: '10px 0' }}>
                  <ModuleChapters chapters={chapters} />

                  <Button size="sm">
                    <Link
                      to={{
                        pathname: `${currentURL}/${name}/${_id}/quizzes`,
                      }}
                    >
                      Вікторини
                    </Link>
                  </Button>
                </Box>

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
