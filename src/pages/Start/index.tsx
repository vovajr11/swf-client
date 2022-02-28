import React, { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import LoginForm from '../../components/AuthForms/Login';
import RegisterForm from '../../components/AuthForms/Register';
import { ReactComponent as HomePictures } from '../../assets/svg/home.svg';
import {
  Background,
  SectionStart,
  Logo,
  PreviewContent,
  AuthButton,
} from './StartPageStyles';

export const Start = () => {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const openModalLogin = () => {
    setLoginShow(!loginShow);
  };

  const openModalRegister = () => {
    setRegisterShow(!registerShow);
  };

  return (
    <>
      <Modal isShowing={loginShow} hide={openModalLogin}>
        <LoginForm />
      </Modal>

      <Modal isShowing={registerShow} hide={openModalRegister}>
        <RegisterForm />
      </Modal>

      <Background>
        <SectionStart>
          <div>
            <Logo>SWF</Logo>
            <PreviewContent>
              <h1>Привіт друже!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti officiis quis nulla, inventore accusamus cupiditate ad
                rerum aliquam, ipsam vitae quia id a fugit iste.
              </p>
            </PreviewContent>

            <AuthButton>
              <Button look="primary" size="md" onClick={openModalLogin}>
                Вхід
              </Button>
              <Button look="primary" size="md" onClick={openModalRegister}>
                Реєстрація
              </Button>
            </AuthButton>
          </div>

          <div>
            <HomePictures />
          </div>
        </SectionStart>
      </Background>
    </>
  );
};
