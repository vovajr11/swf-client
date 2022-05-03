import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { createModule } from '@redux/courses/coursesAPI';
import Input from '@components/Input';
import Button from '@components/Button';
import Select from '@components/Select';
import validation from '@validations/сreateModuleForm';
import { Form } from './FormStyles';

interface IProps {
  closeTheForm: () => void;
}

interface IForm {
  name: string;
  description: string;
}

const CreateModuleForm = ({ closeTheForm }: IProps) => {
  const initialValues: IForm = { name: '', description: '' };
  const dispatch = useDispatch();
  const [courseId, setCourseId] = useState('');

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        dispatch(createModule({ ...values, courseId }));
        closeTheForm();
      }}
      validationSchema={validation}
    >
      {({ values, handleSubmit, handleChange }) => (
        <>
          <Select setCourseId={setCourseId} />
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Назва модуля"
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
              Додати
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default CreateModuleForm;
