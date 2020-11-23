    import React, {useState, useEffect} from 'react'
import './Calculator.css'
import { BasicOperations } from '../Molecules/BasicOperations'
import { ButtonKeyGroup } from '../Molecules/ButtonKeyGroup'
import { PrincipalDisplay } from '../Molecules/PrincipalDisplay'
import { ButtonKey } from '../Atoms/ButtonKey'


export const Calculator = (props) => {

    const [prevValue, setPrevValue] = useState(null);
    const [nextValue, setNextValue] = useState("0");
    const [op, setOp] = useState(null);
  
    useEffect(() => {}, [op, nextValue, prevValue]);

    const CalculatorOperations = {
        "/": (firstValue, secondValue) => firstValue / secondValue,
        "*": (firstValue, secondValue) => firstValue * secondValue,
        "+": (firstValue, secondValue) => firstValue + secondValue,
        "-": (firstValue, secondValue) => firstValue - secondValue,
        "=": (firstValue, secondValue) => secondValue,
      };
    
     const performOperation = () => {
        console.log(op)
        console.log(parseFloat(nextValue))
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue("0");
    setPrevValue(0);
    setOp(null);
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        console.log("1")
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
          console.log("2 "+value)
          setOp(value);
          console.log("2 "+op)
      }
      if (prevValue && op && nextValue) {
        console.log("3 "+op)
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };
  console.log(prevValue)
  console.log(op)
  console.log(nextValue)

    return(
        <div className="calculator">
            <div className="view">
                <PrincipalDisplay result={nextValue}/>
            </div>
            <div className="buttons">
                <ButtonKeyGroup handleClick={handleOperation}/>
                <BasicOperations handleClick={handleOperation}/>                
            </div>
            <div className="equal-btn">
                <ButtonKey value='=' handleClick={handleOperation}></ButtonKey>
            </div>
            <div className="clear-btn">
                <ButtonKey value='c' handleClick={handleOperation}></ButtonKey>
            </div>
        </div>
    )
}