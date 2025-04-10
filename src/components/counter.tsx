import { useState } from 'react';
import './counter.scss'

export function Counter() {
  const [count, setCount] = useState(0);
  return <div>
    <h1>Counter</h1>
    <div>{count}</div>
    <button className={'button'} onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Increment</button>
  </div>
}
