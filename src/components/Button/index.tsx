import React from "react";
import { GradientBtn, PrimaryBtn } from "./ButtonStyles";

interface IButton {
  label: string;
  styleType: string;
}

const Button = (config: IButton) => {
  const { label, styleType } = config;

  return (
    <>
      {styleType === "gradient" && <GradientBtn>{label}</GradientBtn>}
      {styleType === "primary" && <PrimaryBtn>{label}</PrimaryBtn>}
    </>
  );
};

export default Button;
