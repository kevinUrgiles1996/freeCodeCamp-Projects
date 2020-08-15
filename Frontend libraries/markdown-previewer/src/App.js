import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

import marked from 'marked';

const App = () => {

  const [previewerContent, setPreviewerContent] = useState('');

  const changePreviewerContent = (content) => setPreviewerContent(content);

  marked.setOptions({ breaks: true });

  return (
    <div className='has-background-grey-lighter'>
      <Header />
      <div className='container' >
        <Editor setPreviewerContent={changePreviewerContent} />
        <Previewer previewerContent={marked(previewerContent)} />
      </div>
    </div>
  );
}

export default App;
