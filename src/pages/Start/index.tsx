import React from "react";
import Button from "../../components/Button";
import { ReactComponent as HomePictures } from "../../assets/svg/home.svg";
import {
  Background,
  SectionStart,
  Logo,
  PreviewContent,
  AuthButton,
} from "./StartPageStyles";

export const Start = () => {
  return (
    <Background>
      <SectionStart>
        <div>
          <Logo>SWF</Logo>
          <PreviewContent>
            <h1>Привіт друже!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              officiis quis nulla, inventore accusamus cupiditate ad rerum
              aliquam, ipsam vitae quia id a fugit iste.
            </p>
          </PreviewContent>

          <AuthButton>
            <Button label="Вхід" styleType="primary" />
            <Button label="Реєстрація" styleType="primary" />
          </AuthButton>
        </div>

        <div>
          <HomePictures />
        </div>
      </SectionStart>
    </Background>
  );
};
