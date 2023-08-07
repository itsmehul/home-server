import ButtonBase, { ButtonBaseProps } from "@/components/Button/ButtonBase";
import styled from "styled-components";

export type ChipProps = {
  isSelected?: boolean;
} & ButtonBaseProps;

const StyledChip = styled(ButtonBase).attrs<ChipProps>(() => ({
  as: "button",
}))<ChipProps>`
  background-color: ${({ theme, invert, isSelected }) =>
    isSelected ? theme[invert ? "toneTwo" : "toneOne"] : "transparent"};
  color: ${({ theme, invert, isSelected }) =>
    isSelected ? theme[invert ? "toneOne" : "toneTwo"] : theme.toneOne};
  border: none;
  border-radius: 5px;
  text-transform: capitalize;
`;

const Chip = ({
  children,
  ...props
}: ChipProps & { children: React.ReactNode }) => {
  return <StyledChip {...props}>{children}</StyledChip>;
};

export default Chip;
