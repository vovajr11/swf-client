import React from "react";
import { StyledInput } from "./InputStyles";

interface IInput {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, name, placeholder, value, onChange }: IInput) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
