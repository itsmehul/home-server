import { Toast } from "@/components/Page";
import PwaHeaders from "@/components/Pwa/PwaHeaders";
import { PwaUpdater } from "@/components/Pwa/PwaUpdator";



const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PwaHeaders />
      <PwaUpdater />

      {children}
      <Toast />
    </>
  );
};

export default AppWrapper;
