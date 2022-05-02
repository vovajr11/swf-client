import { Box } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  getDetailsOfAllCourses,
  switchVisibilityCourse,
} from '@redux/courses/coursesAPI';
import { useAppSelector } from '@hooks/appHook';
import useToggle from '@hooks/useToggle';
import Button from '@components/Button';
import Modal from '@components/Modal';
import coursePrevImg from '@assets/img/coursePrevImg.jpg';
import {
  CourseList,
  CourseItem,
  Content,
  ButtonListForAdmin,
} from './CourseStyles';

interface ICourseInfo {
  id: string;
  name: string;
  isVisible: boolean | undefined;
}

export const Courses = () => {
  const dispatch = useDispatch();
  const currentURL = useLocation().pathname;

  const courses = useAppSelector(state => state.courses.coursesForStudents);
  const isAdmin = useAppSelector(state => state.session.user.role) === 'admin';
  const isStudent =
    useAppSelector(state => state.session.user.role) === 'student';

  const [courseInfo, setCourseInfo] = useState<ICourseInfo>({
    id: '',
    name: '',
    isVisible: false,
  });

  useEffect(() => {
    dispatch(getDetailsOfAllCourses());
  }, []);

  const [isShowCourseModal, toggleIsShowCourseModal] = useToggle(false);

  const onSwitchVisibilityCourse = async () => {
    dispatch(
      switchVisibilityCourse({
        id: courseInfo.id,
        isVisible: !courseInfo.isVisible,
      }),
    );

    toggleIsShowCourseModal();
  };

  return (
    <>
      <h1>Всі курси</h1>
      <CourseList>
        {courses.length > 0 ? (
          <>
            {courses.map(
              ({ name, description, numberOfModules, id, isVisible }) => {
                return (
                  <CourseItem key={id}>
                    <img src={coursePrevImg} alt={name} />
                    <Content>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <h2>{name}</h2>

                        {isVisible ? (
                          <LockOpenIcon color="success" />
                        ) : (
                          <LockIcon color="error" />
                        )}
                      </Box>

                      <p className="number-of-modules">
                        Кількість модулів: <span>{numberOfModules}</span>
                      </p>
                      <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda iure nemo quibusdam, perspiciatis animi autem,
                        quo minus eveniet asperiores expedita, quia officiis
                        error accusamus cupiditate? Asperiores quis optio quod
                        rerum.
                      </p>

                      {isAdmin && (
                        <ButtonListForAdmin>
                          <Button
                            size="md"
                            onClick={() => {
                              toggleIsShowCourseModal();
                              setCourseInfo({ id, name, isVisible });
                            }}
                          >
                            {isVisible ? 'Закрити курс' : 'Відкрити курс'}
                          </Button>

                          <Button type="button">
                            <Link
                              to={{
                                pathname: `${currentURL}/${name}/${id}`,
                              }}
                            >
                              Деталі
                            </Link>
                          </Button>
                        </ButtonListForAdmin>
                      )}

                      {isStudent && isVisible && (
                        <Button type="button">
                          <Link
                            to={{
                              pathname: `${currentURL}/${name}/${id}`,
                            }}
                          >
                            Деталі
                          </Link>
                        </Button>
                      )}
                    </Content>
                  </CourseItem>
                );
              },
            )}
          </>
        ) : (
          <p>Курсів нема</p>
        )}
      </CourseList>

      <Modal isShowing={isShowCourseModal} hide={toggleIsShowCourseModal}>
        <h2>
          Ти хочеш {courseInfo.isVisible ? 'сховати' : 'відкрити курс'} курс
          {': '}
          {courseInfo.name}
        </h2>
        <Button size="md" onClick={onSwitchVisibilityCourse}>
          Так
        </Button>
      </Modal>
    </>
  );
};
