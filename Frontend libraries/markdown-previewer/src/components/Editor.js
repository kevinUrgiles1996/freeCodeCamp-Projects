import React, { useState, useEffect } from 'react';

import { saveAs } from 'file-saver';

import SaveIcon from '../img/save.svg';
import markdownPath from '../files/firstLoad.md';

const Editor = ({ setPreviewerContent }) => {

  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    fetchInitialContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchInitialContent = async () => {
    const content = await fetch(markdownPath);
    const initialContent = await content.text();
    setEditorContent(initialContent);
    setPreviewerContent(initialContent);
  }

  const handleTextArea = (event) => {
    const { value: text } = event.target;
    setEditorContent(text);
    setPreviewerContent(text);
  }

  const saveFile = (event) => {
    event.preventDefault();
    const blob = new Blob([editorContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'README.md');
  }

  return (
    <div className='card editor-card' >
      <div className='card-header has-background-primary'>
        <h2 className='card-header-title' >Editor</h2>
        <button className='button is-info' onClick={saveFile} >
          <img src={SaveIcon} alt='Full screen icon' />Save
        </ button>
      </div>
      <div className='card-content' >
        <textarea id='editor' value={editorContent} onChange={handleTextArea} ></textarea>
      </div>

    </div>
  )


}

export default Editor;
