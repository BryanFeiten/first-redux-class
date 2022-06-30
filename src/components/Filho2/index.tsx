import { useEffect } from "react";
import PrimaryButton from "../PrimaryButton";

type receivedParameters = {
  value: number,
  onDecrease: Function,
}

export default function Filho2({ value, onDecrease }: receivedParameters) {
  function decrease() {
    onDecrease(value - 1);
  }

  return (
    <>
      <h3>Filho 2</h3>
      <button onClick={decrease}>-1</button>
      <div>
        <p>
          <strong>
            Valor recebido:
          </strong>
          {value}
        </p>
      </div>
    </>
  );
}