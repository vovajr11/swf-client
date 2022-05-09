import React from 'react';
import Box from '@mui/material/Box';
import ChooseTheCorrectAnswerForm from '../ChooseTheCorrectAnswerForm';
import PuzzleForm from '../PuzzleForm';
import {
  TabWrapper,
  TabList,
  StyledTab,
  StyledTabPanel,
} from './CreateQuizzesModal.styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <StyledTabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </StyledTabPanel>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CreateQuizForm = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabWrapper>
      <Box sx={{ borderRight: 1, borderColor: 'divider' }}>
        <TabList value={value} onChange={handleChange}>
          <StyledTab label="Вибрати вірну відповідь" {...a11yProps(0)} />
          <StyledTab label="Пазли" {...a11yProps(1)} />
          <StyledTab label="Item Three" {...a11yProps(2)} />
        </TabList>
      </Box>
      <TabPanel value={value} index={0}>
        <ChooseTheCorrectAnswerForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PuzzleForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </TabWrapper>
  );
};

export default CreateQuizForm;
