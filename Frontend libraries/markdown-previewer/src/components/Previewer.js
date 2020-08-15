import React from 'react';

import InfoIcon from '../img/info.svg';

const Previewer = ({ previewerContent }) => {

  return (
    <div className='card previewer-card' >
      <div className='card-header has-background-primary' >
        <h2 className='card-header-title ' >Previewer</h2>

        <a
          href='https://www.markdownguide.org/cheat-sheet/'
          target='_blank' rel='noopener noreferrer'
          className='button is-info'>
          <img src={InfoIcon} alt="Full screen icon" />
              Cheatsheet
        </a >
      </div>
      <div className='card-content' id='preview' dangerouslySetInnerHTML={{ __html: previewerContent }} />

    </div >
  )
}

export default Previewer;
