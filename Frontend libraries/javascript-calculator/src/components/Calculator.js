import React, { useState } from 'react';
import Display from './Display';
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';
import SpecialButton from './SpecialButton';


const Calculator = () => {

  const [fullValue, setDisplayValue] = useState('');
  const [currentElement, setCurrentElement] = useState('')
  const [numbers, setNumbers] = useState([]);
  const [operations, setOperations] = useState([]);
  const [nextValueNegative, setNextValueNegative] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  const operators = '+-x/';

  const countPoints = (word) => {
    let points = 0, i = 0;
    for (i; i < word.length; i++) {
      if (word[i] === '.') points++;
    }
    return points;
  }

  const handleButton = (currentValue) => {

    const isOperator = operators.includes(currentValue);
    const isPoint = currentValue === '.';
    const isNumber = '0123456789'.includes(currentValue);
    const isOperatorRepeated = isOperator && (currentElement === '')

    if (isPoint) {
      const amountOfPoints = countPoints(currentElement);
      if (amountOfPoints < 1) {
        setDisplayValue((prevValue) => (prevValue + currentValue));
        setCurrentElement((prevElement) => (prevElement + currentValue))
      }
    } else if (isOperator) {
      if (isOperatorRepeated) {
        const op = currentValue;
        setDisplayValue((prevValue) => (prevValue + currentValue));
        if (op === '-') {
          setNextValueNegative(true);
        } else {
          setOperations((prevOperations) => {
            prevOperations.pop();
            return [...prevOperations, op];
          });
          setHasChanged(true);
        }
      } else {
        setDisplayValue((prevValue) => (prevValue + currentValue));
        setNumbers((prevNumbers) => [...prevNumbers, +(currentElement)])
        setOperations((prevOperations) => [...prevOperations, currentValue]);
        setCurrentElement('');
      }
    } else if (isNumber) {
      setDisplayValue((prevValue) => (prevValue === '0' ? '0' : prevValue + currentValue));
      setCurrentElement((prevElement) => (prevElement === '0' ? '0' : prevElement + currentValue));
    } else {
      if (nextValueNegative && !hasChanged) {
        calculateResult([...numbers, -(currentElement)], operations)
        setNextValueNegative(false);
      } else {
        calculateResult([...numbers, +(currentElement)], operations)
      }
    }


  }

  const calculateResult = (numbers, operations) => {

    console.log(numbers, operations)

    let result = numbers.shift();
    numbers.forEach((number) => {

      const operation = operations.shift();
      switch (operation) {
        case "+":
          result += number;
          break;
        case "-":
          result -= number
          break;
        case "x":
          result *= number
          break;
        case "/":
          result = result / number;
          break;
        default:
      }
    })
    setDisplayValue(String(result));
    setCurrentElement(String(result));
    setOperations([])
    setNumbers([]);
  }

  const clearDisplay = () => {
    setDisplayValue('');
    setCurrentElement('');
    setNumbers([]);
    setOperations([]);
  }

  return (
    <div className="calculator-box" >
      <Display fullValue={fullValue} currentElement={currentElement} />
      <div className="pure-g row">
        <NumberButton id='nine' value='9' handleButton={handleButton} />
        <NumberButton id='eight' value='8' handleButton={handleButton} />
        <NumberButton id='seven' value='7' handleButton={handleButton} />
        <OperationButton id='multiply' value='x' handleButton={handleButton} />
      </div>
      <div className="pure-g row">
        <NumberButton id='four' value='4' handleButton={handleButton} />
        <NumberButton id='five' value='5' handleButton={handleButton} />
        <NumberButton id='six' value='6' handleButton={handleButton} />
        <OperationButton id='subtract' value='-' handleButton={handleButton} />
      </div>
      <div className="pure-g row">
        <NumberButton id='three' value='3' handleButton={handleButton} />
        <NumberButton id='two' value='2' handleButton={handleButton} />
        <NumberButton id='one' value='1' handleButton={handleButton} />
        <OperationButton id='add' value='+' handleButton={handleButton} />
      </div>
      <div className="pure-g row">
        <NumberButton id='zero' value='0' handleButton={handleButton} largeButton={true} />
        <SpecialButton id='decimal' value='.' setDisplayDecimal={handleButton} />
        <OperationButton id='divide' value='/' handleButton={handleButton} />
      </div>
      <div className="pure-g row">
        <div value='' className="pure-u-1-4 pure-button large-button button-error" onClick={() => clearDisplay()} ><span id='clear' className='calc-element'>C</span></div>
        <div className="pure-u-1-4 pure-button large-button button-success" onClick={() => handleButton()} ><span id='equals' className='calc-element'>=</span></div>
      </div>
    </div>
  )
}

export default Calculator;
