import { request } from "http";
import { useEffect, useState } from "react";
import Filho1 from "../../components/Filho1";
import Filho2 from "../../components/Filho2";

export default function () {
  const [valorRecebido, setValorRecebido] = useState(0);

  function onPassarValor(valorFilho1: number) {
    setValorRecebido(valorFilho1);
  }

  function onDecrease(valorFilho2: number) {
    setValorRecebido(valorFilho2);
  }

  return (
    <>
      <h2>Comp. pai</h2>
      <Filho1  value={valorRecebido} onClickPassarValor={onPassarValor} />
      <Filho2 value={valorRecebido} onDecrease={onDecrease} />
    </>
  );
}