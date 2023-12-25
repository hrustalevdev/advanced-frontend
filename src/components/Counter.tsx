import { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <div className={styles.btn}>
        <button className={`${styles.red} ${styles.green}`} onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  )
}
