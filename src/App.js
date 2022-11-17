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
  const [status, setStatus] = useState('typing');
  const [formula, setFormula] = useState('0');
  const [result, setResult] = useState(null);

  const displayedText = status === 'typing' ? formula : result;

  function handleClick(val) {
    setStatus('typing');
    //does not work
    if (formula.startsWith('0') && Number.isInteger(val) && formula.length < 2) {
      setFormula('' + val);
      
    } else if (formula.includes('.') && val === '.') {
      return;
    } else {
      setFormula(formula + val);
    }
  }

  function handleEqualsBtnClick() {
    setStatus('result');
    setResult(eval(formula));
    setFormula('0');
  }

  function handleClearBtnClick() {
    setStatus('typing');
    setFormula('0');
  }

  return (
    <div className='App'>
      <p className='display' id='display'>{displayedText}</p>
      <div className='keys'>
      <div className='digits'>
        {digits.map(i => {
          return (
            <button className='btn' id={i.id} onClick={() => handleClick(i.value)}>{i.value}</button>
          )
        })}
      </div>
      <div className='operators'>
      {operators.map(i => {
          return (
            <button className='btn' id={i.id} onClick={() => handleClick(i.value)}>{i.value}</button>
          )
        })}
      </div>
      <div className='equals-and-clear'>
        <button className='big-btn' id='clear' onClick={handleClearBtnClick}>AC</button>
        <button className='big-btn' id='equals' onClick={handleEqualsBtnClick}>=</button>
      </div>
      </div>

    </div>
  );
}

export default App;
