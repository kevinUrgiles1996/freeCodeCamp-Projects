import React, { useState } from 'react';

import FullScreenIcon from '../img/full-screen.svg';


const Previewer = ({ previewerContent, changeEditorVisibility }) => {
  const [zoom, setZoom] = useState(false);

  const zoomPreviewer = () => {
    setZoom(!zoom);
    changeEditorVisibility();
  }

  return (
    <div className={`card previewer-card ${zoom ? 'full-screen-viewer' : ''}`} >
      <div className='card-header has-background-primary' >
        <h2 className='card-header-title ' >Previewer</h2>
        <span href="#" className="card-header-icon" aria-label="more options" onClick={zoomPreviewer} >
          <img className='fullScreenIcon' src={FullScreenIcon} alt="Full screen icon" />
        </span>
      </div>
      <div className='card-content' id='preview' dangerouslySetInnerHTML={{ __html: previewerContent }} />

    </div >
  )
}

export default Previewer;
