import { Box } from "@/components/Auxilary";
import { Button } from "@/components/Button";
import { showPwaInstallButtonAtom } from "@/utils";
import { useAtom } from "jotai";
import { RiDownload2Fill } from "react-icons/ri";
import { useDidMount } from "rooks";

declare global {
  interface Window {
    deferredPrompt: any;
  }
}

const PwaInstallButton = () => {
  const [showInstallButton, setShowInstallButton] = useAtom(
    showPwaInstallButtonAtom
  );
  useDidMount(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setShowInstallButton(event);
    });

    window.addEventListener("appinstalled", (event) => {
      setShowInstallButton(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", (event) => {});

      window.removeEventListener("appinstalled", (event) => {
        console.debug("App Installed");
        setShowInstallButton(null);
      });
    };
  });

  const handleInstallButtonClick = async () => {
    const promptEvent = showInstallButton;
    if (!promptEvent?.prompt) {
      setShowInstallButton(null);
      return;
    }
    promptEvent.prompt();
    await promptEvent.userChoice;
    setShowInstallButton(null);
  };

  if (!showInstallButton) return null;

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    <Box>
      <h3>Add to Homescreen!</h3>
      <video
        src="https://storage.googleapis.com/web-dev-uploads/video/RK2djpBgopg9kzCyJbUSjhEGmnw1/UhWxRAtIB6KQpbMYnDSe.mp4"
        autoPlay
        loop
        muted
        playsInline
        width="100%"
        height="auto"
        style={{ marginTop: "1em" }}
      ></video>
    </Box>;
  }

  return (
    <Box>
      <h3>Use as App!</h3>
      <Button
        onClick={handleInstallButtonClick}
        rightIcon={RiDownload2Fill}
        m="1em 0"
      >
        Install
      </Button>
    </Box>
  );
};

export default PwaInstallButton;
