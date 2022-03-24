import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Formik } from 'formik';
import Button from '@components/Button';
import EditorToolbar, { modules, formats } from './EditorToolbar';

interface IForm {
  textEditorContent: string;
}

interface ITextEditorConfig {
  credentialsForTheReq: object;
  functionForTheReq: any;
}

const TextEditor = (config: ITextEditorConfig) => {
  const { credentialsForTheReq, functionForTheReq } = config;
  const initialValues: IForm = { textEditorContent: '' };

  const [textEditorValue, setTextEditorValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    setTextEditorValue(value);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        if (textEditorValue.length > 0) {
          dispatch(
            functionForTheReq({
              content: textEditorValue,
              ...credentialsForTheReq,
            }),
          );
        }
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '50px' }}>
            <EditorToolbar />
            <Button type="submit" size="sm">
              Додати
            </Button>
          </div>

          <ReactQuill
            theme="snow"
            value={textEditorValue}
            onChange={handleChange}
            placeholder={'Шось розказуй...'}
            modules={modules}
            formats={formats}
            style={{ height: '700px' }}
          />
        </form>
      )}
    </Formik>
  );
};

export default TextEditor;
