import { Formik } from 'formik';
import Input from '@components/Input';
import Button from '@components/Button';
import { Wrapp, Form, Title } from '../AuthFormsStyles';

interface IForm {
  email: string;
  password: string;
  name: string;
}

const Register = () => {
  const initialValues: IForm = { email: '', password: '', name: '' };

  return (
    <Wrapp>
      <Title>Реєстрація</Title>

      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values, 'val');

          // dispatch(signInUser(values));
        }}
        // validationSchema={validation}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Пошта"
              value={values.email}
              onChange={handleChange}
            />

            <Input
              type="password"
              name="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
            />

            <Input
              type="text"
              name="name"
              placeholder="Повне ім'я"
              value={values.name}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained" size="md">
              Зареєструатися
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapp>
  );
};

export default Register;
