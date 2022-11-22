import { useState } from 'react';
import './App.css';

const digits = [
  {id: 'one', value: '1'},
  {id: 'two', value: '2'},
  {id: 'three', value: '3'},
  {id: 'four', value: '4'},
  {id: 'five', value: '5'},
  {id: 'six', value: '6'},
  {id: 'seven', value: '7'},
  {id: 'eight', value: '8'},
  {id: 'nine', value: '9'},
  {id: 'zero', value: '0'},
];

const operators = [{id: 'add', value: '+'}, {id: 'subtract', value: '-'}, {id: 'multiply', value: '*'}, {id: 'divide', value: '/'}];



function App() {
  const [status, setStatus] = useState('typing');
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState(null);
  const [curNum, setCurNum] = useState('0');

 // const displayedText = status === 'typing' ? formula : result;

  function handleNumberBtnClick(val) {
    setStatus('typing');
    if (curNum === '0') {
      setCurNum(val);
      setFormula(val); 
    } else if (curNum === '+' || curNum === '-' || curNum === '*' || curNum === '/') {
      setCurNum(val);
      setFormula(formula + val);
    } else {
      setCurNum(curNum + val);
      setFormula(formula + val);
    }
  }

  function handleDecimalBtnClick() {
    if (curNum.includes('.')) {
      return;
    } else {
      setCurNum(curNum + '.');
      setFormula(formula + '.');
    }
  }

  function handleOperatorBtnClick(val) {
    if (status === 'result') {
      setStatus('typing');
      setCurNum(val);
      setFormula(result + val);
      return;
    }
    setStatus('typing');
    setCurNum(val);
    //setFormula(formula + val);
    if (formula.endsWith('/') || formula.endsWith('*') || formula.endsWith('+') || formula.endsWith('-')) {
      if (val === '-') {
        setFormula(formula + val);
      } else {
        const regex = /[^\d]/;
        setFormula(formula.slice(0, formula.search(regex)) + val);
      }
    } else {
      setFormula(formula + val);
    }
  }

  function handleEqualsBtnClick() {
    setStatus('result');
    setResult(eval(formula));
    setCurNum('0');
    setFormula('');
  }

  function handleClearBtnClick() {
    setStatus('typing');
    setCurNum('0')
    setFormula('');
  }

  return (
    <div className='App'>
      <p id='display'>{status === 'typing' ? curNum : result}</p>
      <p className='display'>{status === 'typing' ? formula : result}</p>
      <div className='keys'>
      <div className='digits'>
        {digits.map(i => {
          return (
            <button key={i.id} className='btn' id={i.id} onClick={() => handleNumberBtnClick(i.value)}>{i.value}</button>
          )
        })}
        <button className='btn' id='decimal' onClick={handleDecimalBtnClick}>.</button>
      </div>
      <div className='operators'>
      {operators.map(i => {
          return (
            <button key={i.id} className='btn' id={i.id} onClick={() => handleOperatorBtnClick(i.value)}>{i.value}</button>
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
