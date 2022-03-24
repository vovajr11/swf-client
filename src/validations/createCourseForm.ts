import { object, string } from 'yup';

const validationsForm = object({
    name: string().required('Required'),
    description: string().min(10, 'Too Short!').required('Required'),
});

export default validationsForm;