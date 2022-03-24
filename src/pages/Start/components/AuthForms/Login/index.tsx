import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signInUser } from '@redux/auth/authAPI';
import Input from '@components/Input';
import Button from '@components/Button';
import validation from '@validations/loginForm';
import { Wrapp, Form, Title } from '../AuthFormsStyles';

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

            <Button type="submit" variant="contained" size="md">
              Ввійти
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapp>
  );
};

export default Login;
