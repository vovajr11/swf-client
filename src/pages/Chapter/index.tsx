import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getChapterById } from '@api/chapter';
import { Content } from './ChapterStyles';

export const Chapter = () => {
  const { chapterName, chapterId } = useParams();
  const [chapterContent, setChapterContent] = useState('');

  useEffect(() => {
    (async () => {
      const { chapter } = await getChapterById(chapterId);
      setChapterContent(chapter.content);
    })();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      
      <h1>{chapterName}</h1>
      <Content
        modules={{ toolbar: null }}
        value={chapterContent}
        style={{ margin: '1em', flex: '1', border: 'none' }}
        readOnly={true}
      />
    </>
  );
};
