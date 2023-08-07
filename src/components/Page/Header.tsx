import { Flex } from "@/components/Auxilary";
import { useTheme } from "styled-components";

interface HeaderProps {
  headerContent: React.ReactNode;
}

const Header = ({ headerContent }: HeaderProps) => {
  const theme = useTheme();
  return (
    <Flex
      h="70px"
      align="center"
      bb={`2px solid`}
      clampWidth={["320px", "700px"]}
      m="auto"
      p="0 1em"
    >
      {headerContent}
    </Flex>
  );
};

export default Header;
