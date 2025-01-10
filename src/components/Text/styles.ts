import styled from "styled-components";
import { Props } from ".";

type PropsActive = Omit<Props, "children">;

export const Text = styled.p<PropsActive>`
  color: ${({ secundarycolor }) => (secundarycolor ? "#fff" : "#9899a0")};
  font-size: 18px;
`;
