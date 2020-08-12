import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

import marked from 'marked';

const App = () => {

  const [previewerContent, setPreviewerContent] = useState('');
  const [isEditorVisible, setIsEditorVisible] = useState(true);
  const [isPreviewerVisible, setIsPreviewerVisible] = useState(true);

  const changePreviewerContent = (content) => setPreviewerContent(content);

  marked.setOptions({ breaks: true });

  return (
    <div className='App has-background-grey-lighter'>
      <Header />
      <div className='container' >

        <Editor
          isHidden={!isEditorVisible}
          setPreviewerContent={changePreviewerContent}
          changePreviewerVisibility={() => setIsPreviewerVisible(!isPreviewerVisible)} />

        {isPreviewerVisible &&
          <Previewer
            previewerContent={marked(previewerContent)}
            changeEditorVisibility={() => setIsEditorVisible(!isEditorVisible)}
          />
        }
      </div>
    </div>
  );
}

export default App;
