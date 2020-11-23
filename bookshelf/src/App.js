import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Description from './components/Description'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="centralPage">
        <Description />
        <img src="https://images.unsplash.com/photo-1602801831978-5ee390398a0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80" alt=""/>
      </div>

    </div>
  );
}

export default App;
