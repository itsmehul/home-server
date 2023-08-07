import { Flex, Text } from "@/components/Auxilary";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useOutsideClickRef } from "rooks";
import styled from "styled-components";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const StyledSelect = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const SelectButton = styled.button`
  font-weight: 600;
  color: ${(props) => props.theme.toneOne};
  background-color: ${(props) => props.theme.toneTwo};
  border: none;
  border-radius: 5px;
  outline: none;
  border-radius: 2rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
`;

const OptionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: calc(100% + 10px);
  min-width: 200px;
  right: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.toneTwo};
  border-radius: 5px;
  overflow: hidden;
  max-height: 0;
  transition: all 0.3s ease;
  transform: scale(0);
  transform-origin: top right;
  &.open {
    max-height: 200px;
    border: 1px solid ${(props) => props.theme.toneOne};
    transform: scale(1);
  }
`;

const OptionItem = styled.li`
  font-weight: 100;
  font-size: 14px;
  color: ${(props) => props.theme.toneOne};
  padding: 0.5em 1em;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.toneOne};
    color: ${(props) => props.theme.toneTwo};
  }
`;

const Select = ({ options, value, onChange, disabled }: SelectProps) => {
  const [open, setOpen] = useState(false);

  const [ref] = useOutsideClickRef(() => {
    setOpen(false);
  });

  const handleClick = () => {
    if (!disabled) {
      setOpen(!open);
    }
  };

  const handleSelect = (option: Option) => {
    onChange(option.value);
    setOpen(false);
  };

  return (
    <StyledSelect ref={ref}>
      <SelectButton onClick={handleClick} disabled={disabled}>
        <Flex gap="0.4em" align="center">
          <Text size="13px">
            {options.find((option) => option.value === value)?.label}
          </Text>
          <RiArrowDropDownLine size={20} />
        </Flex>
      </SelectButton>
      <OptionList className={open ? "open" : ""}>
        {options.map((option) => (
          <OptionItem key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
          </OptionItem>
        ))}
      </OptionList>
    </StyledSelect>
  );
};

export default Select;
