import { count } from 'console';
import { useEffect, useState } from 'react';

type receivedParameters = {
  value: number;
  onClickPassarValor: Function,
}

export default function Filho1({onClickPassarValor, value}: receivedParameters) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    const newCount = count + 1;

    setCount(newCount);
    onClickPassarValor(newCount);
  }

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <>
      <h3>Filho 1</h3>
      <p> {value} </p>
      <button onClick={increaseCount}>+1</button>
    </>
  );
}