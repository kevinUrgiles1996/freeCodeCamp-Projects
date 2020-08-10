import React from 'react'

const Header = () => {
  return (
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand has-text-centered">
        <a className="navbar-item " href="https://bulma.io">
          <h2 className="title " >Markdown previewer</h2>
        </a>
      </div>
    </nav>
  )
}

export default Header
