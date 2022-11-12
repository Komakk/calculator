import { useState } from 'react';
import './App.css';

const digits = [
  {id: 'one', value: 1},
  {id: 'two', value: 2},
  {id: 'three', value: 3},
  {id: 'four', value: 4},
  {id: 'five', value: 5},
  {id: 'six', value: 6},
  {id: 'seven', value: 7},
  {id: 'eight', value: 8},
  {id: 'nine', value: 9},
  {id: 'zero', value: 0},
  {id: 'decimal', value: '.'},
];

const operators = [{id: 'add', value: '+'}, {id: 'subtract', value: '-'}, {id: 'multiply', value: '*'}, {id: 'divide', value: '/'}];



function App() {
  const [displayedText, setDisplayedText] = useState(0);

  function handleClick(e) {
    console.log(e.target.firstChild);
    setDisplayedText(e.targetfirstChild);
  }

  return (
    <div className='App'>
      <p className='display' id='display'>{displayedText}</p>
      <div className='keys'>
      <div className='digits'>
        {digits.map(i => {
          return (
            <button className='btn' id={i.id} onClick={handleClick}>{i.value}</button>
          )
        })}
      </div>
      <div className='operators'>
      {operators.map(i => {
          return (
            <button className='btn' id={i.id} onClick={handleClick}>{i.value}</button>
          )
        })}
      </div>
      <div className='equals-and-clear'>
        <button className='big-btn' id='clear'>AC</button>
        <button className='big-btn' id='equals'>=</button>
      </div>
      </div>

    </div>
  );
}

export default App;
