import "./App.css";
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const appendInput = val => {
    setInput(input + val);
  };

  const calulateResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
  }

  return (
    <div className='App'>
      <div className='blockcalculator'>
        <Screen input={input}/>
        <div className='fila'>
          <Button handleClick={appendInput}>1</Button>
          <Button handleClick={appendInput}>2</Button>
          <Button handleClick={appendInput}>3</Button>
          <Button handleClick={appendInput}>+</Button>
        </div>
        <div className='fila'>
          <Button handleClick={appendInput}>4</Button>
          <Button handleClick={appendInput}>5</Button>
          <Button handleClick={appendInput}>6</Button>
          <Button handleClick={appendInput}>-</Button>
        </div>
        <div className='fila'>
          <Button handleClick={appendInput}>7</Button>
          <Button handleClick={appendInput}>8</Button>
          <Button handleClick={appendInput}>9</Button>
          <Button handleClick={appendInput}>*</Button>
        </div>
        <div className='fila'>
          <Button handleClick={calulateResult}>=</Button>
          <Button handleClick={appendInput}>0</Button>
          <Button handleClick={appendInput}>.</Button>
          <Button handleClick={appendInput}>/</Button>
        </div>
        <div className='fila'>
          <ClearButton handleClick={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
