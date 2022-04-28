import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArticleIcon from '@mui/icons-material/Article';
import { useAppSelector } from '@hooks/appHook';
import useToggle from '@hooks/useToggle';
import { IChapter } from '@interfaces/course.interface';
import {
  List,
  ItemFlex,
  ArrowWrapp,
  CourseName,
  ModuleName,
  ChapterName,
} from './CourseInfoStyles';

const CourseInfo = () => {
  const courses = useAppSelector(state => state.courses.coursesForAdmin);

  return (
    <ul>
      {courses.map(({ id, name, modules }) => {
        return (
          <CourseItem name={name} key={id}>
            <Modules modules={modules} />
          </CourseItem>
        );
      })}
    </ul>
  );
};

interface IItem {
  name: string;
  children: React.ReactNode;
}

const CourseItem = ({ name, children }: IItem) => {
  const [visible, toggleVisibility] = useToggle(false);

  return (
    <li>
      <ItemFlex>
        <ArrowWrapp isVisible={visible}>
          <ArrowBackIosIcon />
        </ArrowWrapp>
        <CourseName onClick={() => toggleVisibility()}>{name}</CourseName>
      </ItemFlex>
      {visible && children}
    </li>
  );
};

interface IModule {
  modules: IChapter[];
}

const Modules = ({ modules }: IModule) => {
  return (
    <List>
      {modules.length > 0 ? (
        modules.map(({ _id, name, chapters }) => (
          <ModuleItem name={name} key={_id}>
            <List>
              {chapters.length > 0 ? (
                chapters.map(({ _id, name }) => (
                  <ItemFlex key={_id}>
                    <ArticleIcon />
                    <ChapterName>{name}</ChapterName>
                  </ItemFlex>
                ))
              ) : (
                <p>Тем нема</p>
              )}
            </List>
          </ModuleItem>
        ))
      ) : (
        <p>Нема модулів</p>
      )}
    </List>
  );
};

const ModuleItem = ({ name, children }: IItem) => {
  const [visible, toggleVisibility] = useToggle(false);

  return (
    <li>
      <ItemFlex>
        <ArrowWrapp isVisible={visible}>
          <ArrowBackIosIcon />
        </ArrowWrapp>
        <ModuleName onClick={() => toggleVisibility()}>{name}</ModuleName>
      </ItemFlex>

      {visible && children}
    </li>
  );
};

export default CourseInfo;
