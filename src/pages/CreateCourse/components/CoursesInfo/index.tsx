import { useAppSelector } from '@hooks/appHook';
import useToggle from '@hooks/useToggle';
import { IChapter } from '@interfaces/course.interface';
import { List } from './CourseInfoStyles';

const CourseInfo = () => {
  const courses = useAppSelector(state => state.courses.items);

  return (
    <ul>
      {courses.length > 0 ? (
        courses.map(({ id, name, modules }) => {
          return (
            <CourseItem name={name} key={id}>
              <Modules modules={modules} />
            </CourseItem>
          );
        })
      ) : (
        <p>Курсів нема</p>
      )}
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
      <h2 onClick={() => toggleVisibility()}>{name}</h2>
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
      {modules.map(({ _id, name, chapters }) => (
        <ModuleItem name={name} key={_id}>
          <List>
            {chapters.length > 0 ? (
              chapters.map(({ _id, name }) => (
                <li key={_id}>
                  <h4>{name}</h4>
                </li>
              ))
            ) : (
              <p>Тем нема</p>
            )}
          </List>
        </ModuleItem>
      ))}
    </List>
  );
};

const ModuleItem = ({ name, children }: IItem) => {
  const [visible, toggleVisibility] = useToggle(false);

  return (
    <li>
      <h3 onClick={() => toggleVisibility()}>{name}</h3>
      {visible && children}
    </li>
  );
};

export default CourseInfo;
