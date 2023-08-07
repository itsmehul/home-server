import { Toast } from "@/components/Page";
import PouchDbSync from "@/components/Pwa/PouchSync";
import PwaHeaders from "@/components/Pwa/PwaHeaders";
import { PwaUpdater } from "@/components/Pwa/PwaUpdator";
import PouchDB from "pouchdb";
import findPlugin from "pouchdb-find";
import { Provider } from "use-pouchdb";

PouchDB.plugin(findPlugin);

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  console.debug("helo");
  return (
    <Provider
      default="local"
      databases={{
        local: new PouchDB("localdb"),
        local_routines: new PouchDB("local_routines"),
      }}
    >
      <PwaHeaders />
      <PwaUpdater />

      <PouchDbSync>{children}</PouchDbSync>
      <Toast />
    </Provider>
  );
};

export default AppWrapper;
