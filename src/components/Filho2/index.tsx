import { useEffect } from "react";
import PrimaryButton from "../PrimaryButton";

type receivedParameters = {
  value: number,
  onClickPassarValor: Function,
  requestDecreaseValue: Function,
}

export default function Filho2({ value, onClickPassarValor, requestDecreaseValue }: receivedParameters) {
  function decreaseCount() {
    onClickPassarValor(value - 1);
    requestDecreaseValue();
  }

  return (
    <>
      <h3>Filho 2</h3>
      <button onClick={decreaseCount}>-1</button>
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