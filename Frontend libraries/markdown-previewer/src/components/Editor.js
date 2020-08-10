import React, { useState, useEffect } from 'react';
import FullScreenIcon from '../img/full-screen.svg';
import markdownPath from '../files/firstLoad.md';

const Editor = ({ changeContent }) => {

  useEffect(() => {
    fetchInitialContent();
  });

  const fetchInitialContent = async () => {
    const content = await fetch(markdownPath);
    const initialContent = await content.text();
    setText(initialContent);
    changeContent(initialContent);
  }

  const [text, setText] = useState('');
  const handleText = (event) => {
    const { value } = event.target;
    setText(value);
    changeContent(value);
  }

  return (
    <div className='card editor-card' >
      <div className='card-header has-background-primary'>
        <h2 className='card-header-title' >Editor</h2>
        <span href="#" className="card-header-icon" aria-label="more options">
          <img src={FullScreenIcon} alt="Full screen icon" />
        </span>
      </div>
      <div className='card-content' >
        <textarea id='editor' value={text} onChange={handleText} >

        </textarea>

      </div>
    </div>
  )
}

export default Editor;
