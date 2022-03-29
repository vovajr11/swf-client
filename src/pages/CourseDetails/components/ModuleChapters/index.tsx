import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TChapter } from '@interfaces/course.interface';
import Button from '@components/Button';
import { Box } from '@mui/material';

interface IChapter {
  chapters: TChapter[];
}

const ModuleChapters = ({ chapters }: IChapter) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box margin="10px 0;">
      <Button size="sm" onClick={handleClick}>
        Вибери тему
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {chapters.map(({ name, _id }) => {
          return (
            <MenuItem key={_id} onClick={handleClose}>
              {name}
            </MenuItem>
          );
        })}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </Box>
  );
};

export default ModuleChapters;
