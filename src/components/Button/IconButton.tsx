import ButtonBase, { ButtonBaseProps } from "@/components/Button/ButtonBase";
import { NotificationBadge } from "@/components/NotifcationBadge";
import { NotificationBadgeProps } from "@/components/NotifcationBadge/NotificationBadge";
import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

export type IconProps = {} & ButtonBaseProps;

const StyledIconButton = styled(ButtonBase).attrs<IconProps>(() => ({
  as: "button",
}))<IconProps>`
  display: flex;
  background-image: none !important;
  align-items: center;
  justify-content: center;
  color: ${({ isLoading, invert, theme }) =>
    isLoading ? `transparent` : theme[invert ? "toneTwo" : "toneOne"]};
  background-color: transparent;
  border: none;
  position: relative;
`;

const IconButton = ({
  icon,
  badge,
  ...props
}: IconProps & {
  icon: IconType;
  badge?: NotificationBadgeProps["content"];
}) => {
  return (
    <StyledIconButton {...props}>
      {React.createElement(icon, {
        size: props.size
          ? props.size === "compact"
            ? "1rem"
            : props.size === "small"
            ? "1.2rem"
            : props.size === "medium"
            ? "1.8rem"
            : props.size === "large"
            ? "2rem"
            : "1.8rem"
          : "2rem",
      })}
      {badge ? <NotificationBadge content={badge} /> : null}
    </StyledIconButton>
  );
};

export default IconButton;
