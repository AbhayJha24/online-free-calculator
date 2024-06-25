import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.calculator}>
        <article className={styles.outputPane}>
          result
        </article>
        <article className={styles.buttonsArea}>
          <button className={styles.acButton}>AC</button>
          <button className={styles.signChangeButton}>+/-</button>
          <button className={styles.percentButton}>%</button>
          <button className={styles.divisionButton}>÷</button>
          <button className={styles.sevenButton}>7</button>
          <button className={styles.eightButton}>8</button>
          <button className={styles.nineButton}>9</button>
          <button className={styles.multiplyButton}>×</button>
          <button className={styles.fourButton}>4</button>
          <button className={styles.fiveButton}>5</button>
          <button className={styles.sixButton}>6</button>
          <button className={styles.minusButton}>-</button>
          <button className={styles.oneButton}>1</button>
          <button className={styles.twoButton}>2</button>
          <button className={styles.threeButton}>3</button>
          <button className={styles.plusButton}>+</button>
          <button className={styles.zeroButton}>0</button>
          <button className={styles.commaButton}>&#44;</button>
          <button className={styles.equalsButton}>=</button>
        </article>
      </section>
    </main>
  );
}
