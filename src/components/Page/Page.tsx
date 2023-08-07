import { Flex } from "@/components/Auxilary";
import BottomNavigation from "@/components/Page/BottomNavigation";
import Header from "@/components/Page/Header";

interface PageProps {
  children: React.ReactNode;
  headerContent: React.ReactNode;
}

const Page = ({ children, headerContent }: PageProps) => {
  return (
    <Flex h="100%" dir="column" align="stretch" m="auto">
      <Header headerContent={headerContent} />
      {children}
      <BottomNavigation />
    </Flex>
  );
};

export default Page;
