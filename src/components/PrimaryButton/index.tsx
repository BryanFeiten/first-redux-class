import { ButtonDefault } from "./styled";

type receivedParams = {
  text: string,
  action: Function,
  height: string,
  width: string,
}

export default function PrimaryButton({ action, text, height, width }: receivedParams) {
  return (
    <ButtonDefault widthChoose={width} heightChoose={height} onClick={() => action}>{text ?? 'Botão sem texto'}</ButtonDefault>
  );
}