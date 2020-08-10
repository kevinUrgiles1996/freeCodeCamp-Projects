import React from 'react';
import FullScreenIcon from '../img/full-screen.svg';


const Previewer = ({ text }) => {
  return (
    <div className='card previewer-card ' >
      <div className='card-header has-background-primary' >
        <h2 className='card-header-title ' >Previewer</h2>
        <span href="#" className="card-header-icon" aria-label="more options">
          <img src={FullScreenIcon} alt="Full screen icon" />
        </span>
      </div>
      <div className='card-content' id='preview' dangerouslySetInnerHTML={{ __html: text }} />

    </div >
  )
}

export default Previewer;
