import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MenuItem, Box } from '@mui/material';
import { TChapter } from '@interfaces/course.interface';
import Button from '@components/Button';

interface IChapter {
  chapters: TChapter[];
}

const ModuleChapters = ({ chapters }: IChapter) => {
  const currentURL = useLocation().pathname;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button size="sm" onClick={handleClick}>
        {chapters.length > 0 ? 'Вибери тему' : 'Тем нема'}
      </Button>

      {chapters.length > 0 && (
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
                <Link
                  to={{
                    pathname: `${currentURL}/${name}/${_id}`,
                  }}
                >
                  {name}
                </Link>
              </MenuItem>
            );
          })}
        </Menu>
      )}
    </>
  );
};

export default ModuleChapters;
