import React, { useState } from 'react';
import './Calculator.css'; // Create this CSS file for styling

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <form>
        <input type="text" className='textInput'  value={""} readOnly />
        <input type="text" className='resultInput' value={result} readOnly />
      </form>
      <div className="keypad">
        <button onClick={clear} id="clear" className='symble'>C</button>
        <button name="[" onClick={handleClick} className='symble'>[</button>
        <button name="]" onClick={handleClick} className='symble'>]</button>
        <button name="/" onClick={handleClick} className='symble'>&divide;</button>
        <button name="7" onClick={handleClick} className='number'>7</button>
        <button name="8" onClick={handleClick} className='number'>8</button>
        <button name="9" onClick={handleClick} className='number'>9</button>
        <button name="*" onClick={handleClick} className='symble'>&times;</button>
        <button name="4" onClick={handleClick} className='number'>4</button>
        <button name="5" onClick={handleClick} className='number'>5</button>
        <button name="6" onClick={handleClick} className='number'>6</button>
        <button name="-" onClick={handleClick} className='symble'>&ndash;</button>
        <button name="1" onClick={handleClick} className='number'>1</button>
        <button name="2" onClick={handleClick} className='number'>2</button>  
        <button name="3" onClick={handleClick}className='number'>3</button>
        <button name="+" onClick={handleClick} className='symble'>+</button>
        <button name="00" onClick={handleClick} className='number'>00</button>
        <button name="0" onClick={handleClick} className='number'>0</button>
        <button name="." onClick={handleClick}className='symble' id='dot'>.</button>
        <button onClick={calculate} id="result">=</button>
      </div>
    </div>
  );
}

export default Calculator;
