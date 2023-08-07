import ButtonBase, { ButtonBaseProps } from "@/components/Button/ButtonBase";
import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

export type TextButtonProps = ButtonProps & {};

export type ButtonProps = {
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  invert?: boolean;
  bg?: string;
} & ButtonBaseProps;

const StyledButton = styled(ButtonBase).attrs<ButtonProps>(() => ({
  as: "button",
}))<ButtonProps>`
  color: ${(props) => props.theme.toneOne};
  background-color: transparent;
  position: relative;
  border: none;
  background-image: none !important;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
`;

const TextButton = ({
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps & {
  children: React.ReactNode;
  leftIcon?: IconType;
  rightIcon?: IconType;
}) => {
  return (
    <StyledButton {...props}>
      {leftIcon
        ? React.createElement(leftIcon, {
            size: props.size
              ? props.size === "compact"
                ? "0.7rem"
                : props.size === "small"
                ? "0.9rem"
                : props.size === "medium"
                ? "1.2rem"
                : props.size === "large"
                ? "1.8rem"
                : "1.2rem"
              : "1.2rem",
          })
        : null}
      {children}
      {rightIcon
        ? React.createElement(rightIcon, {
            size: props.size
              ? props.size === "compact"
                ? "0.7rem"
                : props.size === "small"
                ? "0.9rem"
                : props.size === "medium"
                ? "1.2rem"
                : props.size === "large"
                ? "1.8rem"
                : "1.2rem"
              : "1.2rem",
          })
        : null}
    </StyledButton>
  );
};

export default TextButton;
