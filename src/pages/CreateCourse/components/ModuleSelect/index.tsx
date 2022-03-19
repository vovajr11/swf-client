import * as React from 'react';
import { useAppSelector } from '@hooks/appHook';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

interface IModuleSelector {
  setModuleId: React.Dispatch<React.SetStateAction<string>>;
}

const ModuleSelect = ({ setModuleId }: IModuleSelector) => {
  const getAllModules = useAppSelector(state => state.courses.items).flatMap(
    ({ modules }) => modules,
  );

  const [selectedOption, setSelectedOption] = useState('');

  const selectChange = (event: any) => {
    const currentItem = event.target;
    const moduleId = currentItem[event.target.selectedIndex].id;

    setSelectedOption(currentItem.value);
    setModuleId(moduleId);
  };

  return (
    <>
      <InputLabel>Age</InputLabel>
      <h3>
        {selectedOption.length > 0
          ? 'Вибраний курс: ' + selectedOption
          : 'Вибери курс'}
      </h3>
      {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>Age</InputLabel>
        <Select
          // labelId="demo-simple-select-autowidth-label"
          // id="demo-simple-select-autowidth"
          value={selectedOption}
          onChange={selectChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {getAllModules.map(({ name, _id }) => {
            return (
              <option key={_id} id={_id} value={name}>
                {name}
              </option>
            );
          })}
        </Select> */}

      <select onChange={selectChange}>
        <option defaultChecked={true} value=""></option>
        {getAllModules.map(({ name, _id }) => {
          return (
            <option key={_id} id={_id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      {/* </FormControl> */}
    </>
  );
};

export default ModuleSelect;
