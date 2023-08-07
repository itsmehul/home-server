import styled, { CSSProperties } from "styled-components";

export type LayoutProps = {
  w?: CSSProperties["width"];
  h?: CSSProperties["height"];
  p?: CSSProperties["padding"];
  pt?: CSSProperties["paddingTop"];
  pb?: CSSProperties["paddingBottom"];
  pl?: CSSProperties["paddingLeft"];
  pr?: CSSProperties["paddingRight"];
  m?: CSSProperties["margin"];
  mt?: CSSProperties["marginTop"];
  mb?: CSSProperties["marginBottom"];
  ml?: CSSProperties["marginLeft"];
  mr?: CSSProperties["marginRight"];
  flex?: CSSProperties["flex"];
  scroll?: CSSProperties["overflow"];
  border?: CSSProperties["border"];
  invert?: boolean;
  clampWidth?: [string, string];
  cursor?: CSSProperties["cursor"];
  radius?: CSSProperties["borderRadius"];
  pos?: CSSProperties["position"];
  top?: CSSProperties["top"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
  b?: CSSProperties["border"];
  bt?: CSSProperties["borderTop"];
  bb?: CSSProperties["borderBottom"];
  miw?: CSSProperties["minWidth"];
  expand?: boolean;
  o?: CSSProperties["opacity"];
  scrollSnapAlign?: CSSProperties["scrollSnapAlign"];
  scrollSnapType?: CSSProperties["scrollSnapType"];
  transform?: CSSProperties["transform"];
};

const Layout = styled.div<LayoutProps>`
  width: ${({ w, clampWidth }) =>
    clampWidth ? `clamp(${clampWidth[0]},100%,${clampWidth[1]})` : w};
  height: ${({ h }) => h};
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};
  padding-left: ${({ pl }) => pl};
  padding-right: ${({ pr }) => pr};
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  flex: ${({ flex }) => flex};
  overflow: ${({ scroll }) => scroll};
  border: ${({ border }) => border};
  cursor: ${({ cursor }) => cursor};
  border-radius: ${({ radius }) => radius};
  position: ${({ pos }) => pos};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  border-top: ${({ bt }) => bt + "!important"};
  border-bottom: ${({ bb }) => bb + "!important"};
  min-width: ${({ miw }) => miw};
  border: ${({ b }) => b};
  opacity: ${({ o }) => o};
  scroll-snap-align: ${({ scrollSnapAlign }) => scrollSnapAlign};
  scroll-snap-type: ${({ scrollSnapType }) => scrollSnapType};
  transform: ${({ transform }) => transform};

  ${({ expand }) => expand && `width: 100%; height: 100%;`}
`;

export default Layout;
