'use client'

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [output, setOutput] = useState("0");
  const [prevValue, setPrevValue] = useState(0);
  const [operator, setOperator] = useState("");

  // Add, Subtract, Multiply, Divide Functionalities

  function add(a,b){
    return a+b;
  }
  
  function subtract(a,b){
    return a-b;
  }
  
  function multiply(a,b){
    return a*b;
  }
  
  function divide(a,b){
    return a/b;
  }


  // Functionality for handling the click event of a numeric button

  function numericButtonPress(e) {

    let num = e.target.innerHTML;

    // Check if num is defined
    if(num){

      // Check if ouput's length is 1
      if(output.length == 1){

        // Check if the user is pressing zero and the output is already zero
        if(parseInt(num) === 0 && parseInt(output) === 0){
          return;
        }
        
        else{

          // If the output is zero then store the number which the user is pressing
          if(parseInt(output) === 0){
            setOutput(num);
          }

          // else append digits to the previously available number
          else{
            setOutput(output + num);
          }
        }
      }

      // If output length is more than 1 then simply append digits to the previously available number
      else{
        setOutput(output + num)
      }
    }
  }

  // Functionality for handling the click event of the AC button

  function acButtonPress(){

    // Clear all values and operators

    setOperator("");
    setPrevValue(0);
    setOutput("0");
  }

  // Functionality for handling the click event of an operator button

  function operatorButtonPress(e){

    // Set the value of the pressed operator first

    setOperator(e.target.innerHTML);

    // First check for any prev value if any then add it with the current output value and store in prev
    if(prevValue !== 0){
      switch (operator) {
        case '+':
          setPrevValue(add(prevValue, parseInt(output)))
          break;
        case '-':
          setPrevValue(subtract(prevValue, parseInt(output)))
          break;
        case '×':
          setPrevValue(multiply(prevValue, parseInt(output)))
          break;
        case '÷':
          setPrevValue(divide(prevValue, parseInt(output)))
          break;
      
        default:
          break;
      }

      // Clear the output so that the user can enter more numbers

      setOutput("0");
    }
    else{
      // Set the current output value as the prev value
      setPrevValue(parseInt(output));

      // Clear the output so that the user can enter more numbers
      setOutput("0");
    }
  }

  function equalsButtonPress() {

    // Check if the equalTo is pressed when no operator button has been pressed

    if(operator === ""){
      return;
    }

    // Else perform the desired operation

    else{
      switch (operator) {
        case '+':
          setOutput(toString(add(prevValue, parseInt(output))))
          break;
        case '-':
          setOutput(toString(subtract(prevValue, parseInt(output))))
          break;
        case '×':
          setOutput(toString(multiply(prevValue, parseInt(output))))
          break;
        case '÷':
          setOutput(toString(divide(prevValue, parseInt(output))))
          break;
      
        default:
          break;
      }

      // Then finally reset the prev value

      setPrevValue(0);

      // Reset the operator

      setOperator("");
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.calculator}>
        <article className={styles.outputPane}>
          {output}
        </article>
        <article className={styles.buttonsArea}>
          <button className={styles.acButton} onClick={acButtonPress}>AC</button>
          <button className={styles.signChangeButton}>+/-</button>
          <button className={styles.percentButton}>%</button>
          <button className={styles.divisionButton} onClick={operatorButtonPress}>÷</button>
          <button className={styles.sevenButton} onClick={numericButtonPress}>7</button>
          <button className={styles.eightButton} onClick={numericButtonPress}>8</button>
          <button className={styles.nineButton} onClick={numericButtonPress}>9</button>
          <button className={styles.multiplyButton} onClick={operatorButtonPress}>×</button>
          <button className={styles.fourButton} onClick={numericButtonPress}>4</button>
          <button className={styles.fiveButton} onClick={numericButtonPress}>5</button>
          <button className={styles.sixButton} onClick={numericButtonPress}>6</button>
          <button className={styles.minusButton} onClick={operatorButtonPress}>-</button>
          <button className={styles.oneButton} onClick={numericButtonPress}>1</button>
          <button className={styles.twoButton} onClick={numericButtonPress}>2</button>
          <button className={styles.threeButton} onClick={numericButtonPress}>3</button>
          <button className={styles.plusButton} onClick={operatorButtonPress}>+</button>
          <button className={styles.zeroButton} onClick={numericButtonPress}>0</button>
          <button className={styles.commaButton}>&#44;</button>
          <button className={styles.equalsButton} onClick={equalsButtonPress}>=</button>
        </article>
      </section>
    </main>
  );
}
