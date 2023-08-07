import React from "react";
import styled, { css } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  sizes?: "small" | "medium" | "large";
  rightSection?: React.ReactNode;
}

const sizes = {
  small: css`
    font-size: 0.7rem;
  `,
  medium: css`
    font-size: 1rem;
  `,
  large: css`
    font-size: 1.2rem;
  `,
};

const StyledInput = styled.input<InputProps>`
  border: none;
  color: ${(props) => props.theme.toneOne};
  background-color: ${(props) => props.theme.toneTwo};

  font-size: 1rem;
  font-weight: 600;

  outline: none;
  min-width: 0;
  &::placeholder {
    color: ${(props) => props.theme.toneOne};
    font-weight: 100;
    font-size: 0.8rem;
  }
`;

const StyledInputWrapper = styled.div<{
  sizes: "small" | "medium" | "large";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.toneOne};
  background-color: ${(props) => props.theme.toneTwo};
  outline: none;
  border-radius: 0.3rem;
  transition: all 0.3s ease;
  position: relative;
  select {
    color: ${(props) => props.theme.toneOne};
    background-color: ${(props) => props.theme.toneTwo};
    border: none;
    outline: none;
    font-size: 0.6rem;
  }
  min-width: 80px;

  ${(props) => sizes[props.sizes || "medium"]}
`;

const InputWSelect = React.forwardRef<HTMLInputElement, InputProps>(
  ({ sizes = "medium", rightSection, ...props }, ref) => {
    return (
      <StyledInputWrapper sizes={sizes}>
        <StyledInput {...props} ref={ref} />
        {rightSection}
      </StyledInputWrapper>
    );
  }
);

InputWSelect.displayName = "InputWSelect";

export default InputWSelect;
