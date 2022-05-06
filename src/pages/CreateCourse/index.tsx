import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useToggle from '@hooks/useToggle';
import { getCourseForAdmin, createChapter } from '@redux/courses/coursesAPI';
import Modal from '@components/Modal';
import Button from '@components/Button';
import TextEditor from '@components/TextEditor';
import Input from '@components/Input';
import ModuleSelect from '@components/ModuleSelect';
import CreateCourseForm from './components/CreateCourseForm';
import CreateModuleForm from './components/CreateModuleForm';
import CreateQuizzesModal from './components/CreateQuizzesModal';
import CourseInfo from './components/CoursesInfo';
import {
  Wrapper,
  EditorWrapper,
  CourseInfoWrapper,
  ButtonList,
} from './CreateCourse.styles';

export const CreateCourse = () => {
  const dispatch = useDispatch();
  const [isShowCourseModal, toggleIsShowCourseModal] = useToggle(false);
  const [isShowModuleModal, toggleIsShowModuleModal] = useToggle(false);
  const [moduleId, setModuleId] = useState('');
  const [chapterName, setChapterName] = useState('');

  const onChangeChapterName = ({ target }: any) => {
    setChapterName(target.value);
  };

  useEffect(() => {
    dispatch(getCourseForAdmin());
  }, []);

  return (
    <>
      <Modal isShowing={isShowCourseModal} hide={toggleIsShowCourseModal}>
        <CreateCourseForm closeTheForm={toggleIsShowCourseModal} />
      </Modal>

      <Modal isShowing={isShowModuleModal} hide={toggleIsShowModuleModal}>
        <CreateModuleForm closeTheForm={toggleIsShowModuleModal} />
      </Modal>

      <Wrapper>
        <EditorWrapper>
          <TextEditor
            credentialsForTheReq={{
              name: chapterName,
              moduleId,
            }}
            functionForTheReq={createChapter}
          />
        </EditorWrapper>

        <CourseInfoWrapper>
          <ButtonList>
            <Button size="md" onClick={() => toggleIsShowCourseModal()}>
              Добавити Курс
            </Button>
            <Button size="md" onClick={() => toggleIsShowModuleModal()}>
              Добавити Модуль
            </Button>

            <ModuleSelect setModuleId={setModuleId} />
            <Input
              type="text"
              placeholder="Назва теми"
              onChange={onChangeChapterName}
              value={chapterName}
            />
          </ButtonList>

          <CourseInfo />
        </CourseInfoWrapper>
      </Wrapper>

      <h2>Створення тестів</h2>

      <CreateQuizzesModal />
    </>
  );
};
