import { Formik } from 'formik';
import validation from './validation';
import Input from '../../Input';
import { Wrapp, Form, Title } from '../AuthFormsStyles';
import Button from '../../Button';
import { useDispatch } from 'react-redux';
import { signInUser } from '@redux/auth/authAPI';

interface IForm {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const initialValues: IForm = { email: '', password: '' };

  return (
    <Wrapp>
      <Title>Login</Title>

      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          dispatch(signInUser(values));
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
