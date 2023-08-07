import Box, { BoxProps } from "@/components/Auxilary/Box";
import styled from "styled-components";

type SpanProps = BoxProps;

const Span = styled(Box).attrs<SpanProps>(() => ({
  as: "span",
}))<BoxProps>`
  display: inline-block;
  background-color: inherit;
  color: inherit;
`;

export default Span;
