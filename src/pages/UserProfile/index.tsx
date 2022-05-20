import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ExtensionIcon from '@mui/icons-material/Extension';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { getTheResultOfTheQuizzes } from '@api/user';
import { ICompletedQuiz } from '@interfaces/quizzes.interface';
import { useAppSelector } from '@hooks/appHook';
import { TabPanel, a11yProps } from './components/TabPanel';
import ListCompletedQuizzes from './components/ListCompletedQuizzes';
import {
  UserInformationSection,
  UserPhotoWrapper,
  UserName,
  UserEmail,
} from './UserProfile.styles';

export const UserProfile = () => {
  const {
    id: userId,
    username,
    email,
  } = useAppSelector(state => state.session.user);
  const [tabValue, setTabValue] = useState(0);
  const [quizzes, setQuizzes] = useState<ICompletedQuiz[] | undefined>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    (async () => {
      const data = await getTheResultOfTheQuizzes(userId);

      setQuizzes(data);
    })();
  }, []);

  return (
    <div>
      <UserInformationSection>
        <UserPhotoWrapper>
          <AccountBoxIcon />
        </UserPhotoWrapper>
        <UserName>Москалюк Володимир</UserName>
        <UserEmail>{email}</UserEmail>
      </UserInformationSection>

      <div>
        <h2>Пройдені тести</h2>

        {quizzes !== undefined && (
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Вибрати вірну відповідь" {...a11yProps(0)} />
                <Tab label="Перекласти речення" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
              <ListCompletedQuizzes
                quizzes={quizzes}
                quizType={'chooseTheCorrectAnswer'}
                Icon={<FormatListBulletedIcon />}
              />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <ListCompletedQuizzes
                quizzes={quizzes}
                quizType={'translate-sentences'}
                Icon={<GTranslateIcon />}
              />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              Item Three
            </TabPanel>
          </Box>
        )}
      </div>
    </div>
  );
};
