import styled, { css } from "styled-components";

interface ButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  selected?: boolean;
}

const StyledButton = styled.button<ButtonProps & { selected?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.4rem 0.8rem";
      case "large":
        return "1.2rem 2rem";
      default:
        return "0.8rem 1.6rem";
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.8rem";
      case "large":
        return "1.2rem";
      default:
        return "1rem";
    }
  }};
  color: ${(props) => (props.isLoading ? `transparent` : props.theme.toneOne)};
  background-color: ${(props) => props.theme.toneTwo};

  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  position: relative;
  ${(props) =>
    props.isLoading &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: calc(50% - 0.6rem);
        left: calc(50% - 0.6rem);
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 0.2rem solid ${props.theme.toneOne}30;
        border-top-color: ${props.theme.toneOne};
        animation: spin 0.6s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      &:hover {
        opacity: 0.8;
      }
    `}

  &:hover {
    opacity: 0.8;
  }
  border: none;

  ${(props) => {
    if (props.selected) {
      return css`
        border-bottom: 2px solid ${(props) => props.theme.toneOne};
      `;
    }
  }}
`;

const TabButton = ({
  children,
  ...props
}: ButtonProps & { children: React.ReactNode }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default TabButton;
