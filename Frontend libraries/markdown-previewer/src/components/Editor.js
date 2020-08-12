import React, { useState, useEffect } from 'react';

import { saveAs } from 'file-saver';

import FullScreenIcon from '../img/full-screen.svg';
import InfoIcon from '../img/info.svg';
import SaveIcon from '../img/save.svg';
import markdownPath from '../files/firstLoad.md';

const Editor = ({ setPreviewerContent, changePreviewerVisibility, isHidden }) => {

  const [editorContent, setEditorContent] = useState('');
  const [zoom, setZoom] = useState(false);

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

  const zoomEditor = () => {
    setZoom(!zoom);
    changePreviewerVisibility();
  }

  return (
    <div className={`card editor-card ${zoom ? 'full-screen' : ''} ${isHidden ? 'none' : ''}`} >
      <div className='card-header has-background-primary'>
        <h2 className='card-header-title' >Editor</h2>
        <span href='#' className='card-header-icon' aria-label='more options' onClick={zoomEditor} >
          <img className='fullScreenIcon' src={FullScreenIcon} alt='Full screen icon' />
        </span>
      </div>
      <div className='card-content' >
        <textarea id='editor' value={editorContent} onChange={handleTextArea} ></textarea>
      </div>
      <div className={`card-footer ${zoom ? 'none' : ''}`}>
        <div className='card-footer-item'>
          <a href='https://www.markdownguide.org/cheat-sheet/'
            target='_blank' rel='noopener noreferrer'
            className='button is-info'
          >
            <img src={InfoIcon} alt="Full screen icon" />
              Cheatsheet
            </a >
          <button className='button is-info' onClick={saveFile} >
            <img src={SaveIcon} alt='Full screen icon' />
              Save file
            </ button>
        </div>
      </div>
    </div>
  )


}

export default Editor;
