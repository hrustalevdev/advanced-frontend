import { useState } from "react";
import S from "./counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter!!</h1>
      <div>{count}</div>
      <button className={S.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className={S.button} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
