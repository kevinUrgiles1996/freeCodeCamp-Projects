import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const Quote = () => {

  const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#73A857"];

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, [])

  const fetchQuote = async () => {
    const res = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const jsonResponse = await res.json();
    const { quotes } = jsonResponse;
    let min = 0;
    let max = quotes.length + 1;
    const randomNumber = Math.floor(Math.random()* (max - min)) + min
    const randomQuote = quotes[randomNumber];
    const { quote, author } = randomQuote;
    setQuote(quote);
    setAuthor(author);
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    setColor(randomColor);
  }

  return (
    <div className='container' style={{ backgroundColor: color }} >
      <motion.div id='quote-box' 
               initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: .5 }}
       >
        <p id='text' style={{ color }} >{quote}</p>
        <p id='author' style={{ color }}  >-{author}</p>
        <div className='actions'>      
          <a id='new-quote' style={{ backgroundColor: color }} onClick={fetchQuote} >New Quote</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Quote;