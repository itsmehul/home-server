import Box, { BoxProps } from "@/components/Auxilary/Box";
import styled, { CSSProperties } from "styled-components";

type TextProps = BoxProps & {
  size?: CSSProperties["fontSize"];
  weight?: CSSProperties["fontWeight"];
  capitalize?: CSSProperties["textTransform"] | boolean;
  align?: CSSProperties["textAlign"];
};

const Text = styled(Box).attrs<TextProps>(() => ({
  as: "p",
}))<TextProps>`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "normal"};
  text-transform: ${(props) => (props.capitalize ? "capitalize" : "none")};
  text-align: ${(props) => props.align || "left"};
`;

export default Text;
