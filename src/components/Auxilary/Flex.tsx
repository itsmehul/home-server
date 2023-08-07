import styled, { CSSProperties } from "styled-components";
import Box, { BoxProps } from "./Box";

export type FlexProps = BoxProps & {
  dir?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  wrap?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
};

const Flex = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${({ dir = "row" }) => dir};
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ align = "flex-start" }) => align};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  gap: ${({ gap = "0" }) => gap};
`;

export default Flex;
