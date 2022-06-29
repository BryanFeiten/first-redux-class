import { request } from "http";
import { useEffect, useState } from "react";
import Filho1 from "../../components/Filho1";
import Filho2 from "../../components/Filho2";

export default function () {
  const [valorRecebido, setValorRecebido] = useState(0);

  const [request, setRequest] = useState(valorRecebido);
  const [requested, changeRequested] = useState(false);

  useEffect(() => {
    if (requested) {
      setRequest(valorRecebido);
      changeRequested(false);
    }
  }, [request]);

  function onPassarValor(valorFilho1: number) {
    setValorRecebido(valorFilho1);
  }

  function requestDecreaseValue() {
    changeRequested(true);
  }

  return (
    <>
      <h2>Comp. pai</h2>
      <Filho1  value={valorRecebido} onClickPassarValor={onPassarValor} />
      <Filho2 requestDecreaseValue={requestDecreaseValue} onClickPassarValor={onPassarValor} value={valorRecebido} />
    </>
  );
}