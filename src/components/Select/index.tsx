import React, { useState } from 'react';
import { useAppSelector } from '@hooks/appHook';

interface ISelect {
  setCourseId: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ setCourseId }: ISelect) => {
  const getAllCourses = useAppSelector(state => state.courses.coursesForAdmin);
  const [selectedOption, setSelectedOption] = useState('');

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const currentItem = event.target;
    const courseId = currentItem[event.target.selectedIndex].id;

    setSelectedOption(currentItem.value);
    setCourseId(courseId);
  };

  return (
    <div>
      <select onChange={selectChange}>
        <option defaultChecked={true} value=""></option>
        {getAllCourses.map(({ name, id }) => {
          return (
            <option key={id} id={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <h2>{selectedOption.length > 0 ? selectedOption : 'Вибери курс'}</h2>
    </div>
  );
};

export default Select;
