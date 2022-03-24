import styled from '@emotion/styled';
import { theme } from '@theme/index';

export const List = styled.ul`
  padding-left: 20px;
  margin: 10px 0;
`;

export const ItemFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

interface IArrowBox {
  isVisible: boolean;
}

export const ArrowWrapp = styled.div<IArrowBox>`
  transition: 500ms;
  transform: ${props =>
    props.isVisible ? 'rotate(270deg)' : 'rotate(180deg)'};

  > svg {
    color: ${theme.color.gray};
    width: 18px;
  }
`;

const ItemName = styled.p`
  &:hover {
    color: ${theme.color.orange};
  }
`;

export const CourseName = styled(ItemName)`
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
`;

export const ModuleName = styled(ItemName)`
  font-size: 22px;
  cursor: pointer;
`;

export const ChapterName = styled(ItemName)`
  font-size: 18px;
`;
