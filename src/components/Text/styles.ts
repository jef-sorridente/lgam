import styled from "styled-components";
import { Props } from ".";

type PropsActive = Omit<Props, "children">;

export const Text = styled.p<PropsActive>`
  color: #fff;
  font-size: 18px;
`;
