import React from 'react'

const Header = () => {
  return (
    <nav className='navbar has-background-primary' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand has-text-centered'>
        <span className='navbar-item'>
          <h2 className='title'>Markdown previewer</h2>
        </span>
      </div>
    </nav>
  )
}

export default Header
