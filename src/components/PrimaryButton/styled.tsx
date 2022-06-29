import styled from "styled-components";

type buttonProps = {
  widthChoose :string,
  heightChoose :string,
}

export const ButtonDefault = styled.button `
  width: ${(props: buttonProps) => props.widthChoose ? props.widthChoose : '100px'};
  height: ${(props: buttonProps) => props.heightChoose ? props.heightChoose : '200px'};
`;