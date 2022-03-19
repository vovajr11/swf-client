import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IMenu {
  open: boolean;
}

export const Burger = styled.div<IMenu>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 1439px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const LinkList = styled.ul<IMenu>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;

  > li {
    margin-bottom: 25px;
    text-align: center;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1439px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    > li {
      color: #fff;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const LinkElem = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: black;
  transition: 200ms linear;
  &.active {
    transition: 200ms linear;
    background-color: white;
    border-radius: 10px;
    padding: 10px 40px;
  }
`;
