import { count } from 'console';
import { useEffect, useState } from 'react';

type receivedParameters = {
  value: number;
  onClickPassarValor: Function,
}

export default function Filho1({onClickPassarValor, value}: receivedParameters) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(old => ++old);
  }

  useEffect(() => {
    if (value !== count) {
      setCount(value);
    }
  }, [value]);

  useEffect(() => {
    onClickPassarValor(count);
  }, [count]);

  return (
    <>
      <h3>Filho 1</h3>
      <p> {value} </p>
      <button onClick={increaseCount}>+1</button>
    </>
  );
}