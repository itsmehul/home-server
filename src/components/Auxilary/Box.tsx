import Layout, { LayoutProps } from "@/components/Auxilary/Layout";
import { CSSProperties } from "react";
import styled from "styled-components";

export type BoxProps = {
  bg?: CSSProperties["backgroundColor"];
} & LayoutProps;

const Box = styled(Layout) <BoxProps>`
  background-color: ${({ theme, invert, bg }) =>
    bg || theme[invert ? "toneOne" : "toneTwo"]};
  color: ${({ theme, invert }) => theme[invert ? "toneTwo" : "toneOne"]};
  border-color: ${({ theme }) => theme.toneOne};
`;

export default Box;
