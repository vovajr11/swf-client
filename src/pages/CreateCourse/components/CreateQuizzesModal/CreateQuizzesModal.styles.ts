import styled from '@emotion/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const TabList = styled(Tabs)`
  .MuiTabs-flexContainer {
    flex-direction: column;
  }

  .MuiTabs-indicator {
    height: 0;
  }
`;

export const StyledTab = styled(Tab)``;

export const StyledTabPanel = styled.div`
  width: 1000px;
  height: 500px;
`;
