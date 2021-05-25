import './App.css';
import React from 'react'
import Board from './components/Board'
import Food from './components/Food'
import SnakeState from './context/SnakeState'
import Score from './components/Score'
import Footer from './components/Footer';

function App() {

  return (
    <SnakeState>
      <div className='App'>
        <Score />
        <div className="board">
          <Board />
          <Food />
        </div >
        <Footer />
      </div>
    </SnakeState>
  );
}

export default App;
