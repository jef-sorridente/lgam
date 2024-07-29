import styled from "styled-components";
import { Props } from ".";

type PropsActive = Omit<Props, "children">;

export const Text = styled.p<PropsActive>`
  color: ${({ secundaryColor }) => (secundaryColor ? "#fff" : "#9899a0")};
`;
