import ButtonBase, { ButtonBaseProps } from "@/components/Button/ButtonBase";
import styled from "styled-components";

export type OultineButtonProps = ButtonBaseProps & {};

const StyledOutlineButton = styled(ButtonBase)<OultineButtonProps>`
  color: ${(props) => (props.isLoading ? `transparent` : props.theme.toneOne)};
  background-color: ${(props) => props.theme.toneTwo};
  border: 2px solid ${(props) => props.theme.toneOne};
  border-radius: 2rem;
`;

const OutlinedButton = ({
  children,
  ...props
}: OultineButtonProps & { children: React.ReactNode }) => {
  return <StyledOutlineButton {...props}>{children}</StyledOutlineButton>;
};

export default OutlinedButton;
