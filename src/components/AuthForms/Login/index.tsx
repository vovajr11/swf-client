import React from 'react';
import { Formik } from 'formik';
import validation from './validation';
import Input from '../../Input';
import { Wrapp, Form, Title } from '../AuthFormsStyles';
import Button from '../../Button';

interface IForm {
  email: string;
  password: string;
}

const Login = () => {
  const initialValues: IForm = { email: '', password: '' };

  return (
    <Wrapp>
      <Title>Login</Title>

      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log({ values });
        }}
        validationSchema={validation}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />

            <Button type="submit" look="primary" size="md">
              Ввійти
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapp>
  );
};

export default Login;
