import React, { useState } from 'react';
import { useAppSelector } from '@hooks/appHook';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

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

    setSelectedOption(currentItem.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
      <InputLabel id="demo-simple-select-label">Вибір модуля</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={selectedOption}
        onChange={selectChange}
        autoWidth
        label="Age"
      >
        {getAllModules.map(({ name, _id }) => {
          return (
            <MenuItem key={_id} value={name} onClick={() => setModuleId(_id)}>
              {name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ModuleSelect;
