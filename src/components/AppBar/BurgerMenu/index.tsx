import { useState } from 'react';
import userRoutes from '../../../routes/user.json';
import adminRoutes from '../../../routes/admin.json';
import { useAppSelector } from '@hooks/appHook';
import { getUserRole } from '@redux/auth/authSlice';

import { Burger, LinkList, LinkElem } from './BurgerMenuStyles';

const BurgerMenu = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const userRole = useAppSelector(state => getUserRole(state));

  const toggleMenu = () => setIsOpenBurger(!isOpenBurger);
  return (
    <>
      <Burger open={isOpenBurger} onClick={() => toggleMenu()}>
        <div />
        <div />
        <div />
      </Burger>
      <LinkList open={isOpenBurger}>
        {userRoutes.map(route => (
          <li key={route.path}>
            <LinkElem
              to={route.path}
              onClick={() => (isOpenBurger ? toggleMenu() : '')}
            >
              {route.label}
            </LinkElem>
          </li>
        ))}
        {userRole === 'admin' &&
          adminRoutes.map(route => (
            <li key={route.path}>
              <LinkElem
                to={route.path}
                onClick={() => (isOpenBurger ? toggleMenu() : '')}
              >
                {route.label}
              </LinkElem>
            </li>
          ))}
      </LinkList>
    </>
  );
};

export default BurgerMenu;
