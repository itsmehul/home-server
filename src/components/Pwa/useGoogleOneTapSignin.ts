import { fetchUserDataId } from "@/utils";
import { useRouter } from "next/router";
import PouchDB from "pouchdb";
import { useDidMount } from "rooks";
import { usePouch } from "use-pouchdb";

declare global {
  interface Window {
    google: any;
  }
}

function useGoogleOneTapSignin(clientId: string) {
  const router = useRouter();
  const local_db = usePouch();

  async function handleSignin(response: any) {
    localStorage.setItem("userData", response.credential);
    const userId = fetchUserDataId();
    if (!userId) return;
    const pdb = new PouchDB(`${process.env.NEXT_PUBLIC_CDB_PROXY}/${userId}`, {
      auth: {
        username: "arch",
        password: "mehul",
      },
    });

    await local_db.sync(pdb);
    router.replace("/app/profile");
  }

  useDidMount(() => {
    if (localStorage.getItem("userData")) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleSignin,
        cancel_on_tap_outside: false,

        // context: "use",
        // prompt_parent_id: "g_id_onload",
      });
      window.google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed()) {
          console.log("prompt was not displayed");
        } else if (notification.isSkippedMoment()) {
          console.log("prompt was skipped");
        }
      });
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  });
}

export default useGoogleOneTapSignin;
