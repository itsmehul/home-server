import { useEffect, useState } from "react";

declare global {
  interface Window {
    workbox: {
      messageSkipWaiting(): void;
      register(): void;
      addEventListener(name: string, callback: () => unknown): any;
    };
  }
}

export const PwaUpdater = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onConfirmActivate = () => window.workbox.messageSkipWaiting();

  useEffect(() => {
    if (window.workbox === undefined) return;
    window.workbox.addEventListener("controlling", () => {
      window.location.reload();
    });

    window.workbox.addEventListener("waiting", () => setIsOpen(true));
    window.workbox.register();
  }, []);

  if (!isOpen) return null;

  return (
    <div>
      <div>Hey, a new version is available! Please click below to update.</div>
      <button onClick={onConfirmActivate}>Reload and update</button>
      <button onClick={() => setIsOpen(false)}>Cancel</button>
    </div>
  );
};
