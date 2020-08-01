import React from 'react';
import { render } from 'react-dom';

import Quote from './components/Quote';

import './style.css';

const App = () => {
  return (
    <Quote />
 )
}

render(<App />, document.getElementById('root'));
