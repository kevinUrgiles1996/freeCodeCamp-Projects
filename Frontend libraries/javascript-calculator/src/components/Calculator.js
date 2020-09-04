import React, { useState } from 'react';
import Display from './Display';
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';
import SpecialButton from './SpecialButton';


const Calculator = () => {

  const [displayValue, setDisplayValue] = useState('');
  const [currentElement, setCurrentElement] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [operations, setOperations] = useState([]);
  const [nextValueNegative, setNextValueNegative] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  const countPoints = (word) => {
    let points = 0;
    for (let i = 0; i < word.length; i++)
      if (word[i] === '.') points++;
    return points;
  }

  const getTypeOfButton = (value) => {
    const isOperator = '+-x/'.includes(value);
    const isPoint = value === '.';
    const isNumber = '0123456789'.includes(value);
    if (isOperator) return 'operator';
    if (isPoint) return 'point';
    if (isNumber) return 'number';
    return 'equal';
  }

  const handlePoint = (currentElement, currentValue) => {
    const amountOfPoints = countPoints(currentElement);
    if (amountOfPoints < 1) {
      setDisplayValue((prevValue) => (prevValue + currentValue));
      setCurrentElement((prevElement) => (prevElement + currentValue))
    }
  }

  const handleOperation = (currentElement, currentValue) => {
    const isOperatorRepeated = currentElement === '';
    setDisplayValue((prevValue) => (prevValue + currentValue));
    const operation = currentValue;
    if (isOperatorRepeated) {
      if (operation === '-') {
        setNextValueNegative(true);
      } else {
        setOperations((prevOperations) => {
          prevOperations.pop();
          return [...prevOperations, operation];
        });
        setHasChanged(true);
      }
    } else {
      setNumbers((prevNumbers) => [...prevNumbers, +currentElement])
      setOperations((prevOperations) => [...prevOperations, operation]);
      setCurrentElement('');
    }
  }

  const handleNumber = (currentValue) => {
    setDisplayValue((prevValue) => (prevValue === '0' ? '0' : prevValue + currentValue));
    setCurrentElement((prevElement) => (prevElement === '0' ? '0' : prevElement + currentValue));
  }

  const handleEqual = (currentElement) => {
    if (nextValueNegative && !hasChanged) {
      calculateResult([...numbers, -(currentElement)], operations)
      setNextValueNegative(false);
    } else {
      calculateResult([...numbers, +currentElement], operations)
    }
  }

  const handleButton = (currentValue) => {

    const buttonType = getTypeOfButton(currentValue);

    switch (buttonType) {
      case 'point':
        handlePoint(currentElement, currentValue);
        break;
      case 'operator':
        handleOperation(currentElement, currentValue);
        break;
      case 'number':
        handleNumber(currentValue);
        break;
      case 'equal':
        handleEqual(currentElement);
        break;

      default:
        break;
    }

  }

  const calculateResult = (numbers, operations) => {

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
      <Display displayValue={displayValue} currentElement={currentElement} />
      <div className="pure-g row">
        <NumberButton id='seven' value='7' handleButton={handleButton} />
        <NumberButton id='eight' value='8' handleButton={handleButton} />
        <NumberButton id='nine' value='9' handleButton={handleButton} />
        <OperationButton id='multiply' value='x' handleButton={handleButton} />
      </div>
      <div className="pure-g row">
        <NumberButton id='four' value='4' handleButton={handleButton} />
        <NumberButton id='five' value='5' handleButton={handleButton} />
        <NumberButton id='six' value='6' handleButton={handleButton} />
        <OperationButton id='subtract' value='-' handleButton={handleButton} />
      </div>
      <div className="pure-g row">
        <NumberButton id='one' value='1' handleButton={handleButton} />
        <NumberButton id='two' value='2' handleButton={handleButton} />
        <NumberButton id='three' value='3' handleButton={handleButton} />
        <OperationButton id='add' value='+' handleButton={handleButton} />
      </div>
      <div className="pure-g row">
        <NumberButton id='zero' value='0' handleButton={handleButton} largeButton={true} />
        <NumberButton id='decimal' value='.' handleButton={handleButton} />
        <OperationButton id='divide' value='/' handleButton={handleButton} />
      </div>
      <div className="pure-g row">
        <SpecialButton id='clear' value='C' buttonType='button-error' handleButton={clearDisplay} />
        <SpecialButton id='equals' value='=' buttonType='button-success' handleButton={handleButton} />
      </div>
    </div>
  )
}

export default Calculator;
