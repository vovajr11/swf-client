import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { createCourse } from '@redux/courses/coursesAPI';
import Input from '@components/Input';
import Button from '@components/Button';
import validation from '@validations/createCourseForm';
import { Form } from '../Form.styles';

interface IProps {
  closeTheForm: () => void;
}

interface IForm {
  name: string;
  description: string;
}

const CreateCourseForm = ({ closeTheForm }: IProps) => {
  const initialValues: IForm = { name: '', description: '' };
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        dispatch(createCourse(values));
        closeTheForm();
      }}
      validationSchema={validation}
    >
      {({ values, handleSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Назва курсу"
            value={values.name}
            onChange={handleChange}
          />
          <ErrorMessage name="name" />

          <textarea
            name="description"
            placeholder="Опис"
            value={values.description}
            onChange={handleChange}
            cols={30}
            rows={10}
          />
          <ErrorMessage name="description" />

          <Button type="submit" variant="contained" size="sm">
            Створити
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCourseForm;
