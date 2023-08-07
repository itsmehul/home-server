import Box, { BoxProps } from "@/components/Auxilary/Box";
import styled, { CSSProperties } from "styled-components";

type GridProps = BoxProps & {
  templateColumns?: CSSProperties["gridTemplateColumns"];
  templateRows?: CSSProperties["gridTemplateRows"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
};

const Grid = styled(Box)<GridProps>`
  display: grid;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  grid-template-rows: ${({ templateRows }) => templateRows};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

export default Grid;
