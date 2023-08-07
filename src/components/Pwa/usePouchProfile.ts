import { ExerciseRecord, Profile } from "@/types";
import { profileAtom, recordsAtom } from "@/utils";

import { useSetAtom } from "jotai";
import { useDidUpdate } from "rooks";
import { useFind } from "use-pouchdb";

const usePouchUserData = () => {
  const { docs } = useFind<Profile & ExerciseRecord>({
    selector: {
      $or: [{ collection: "profile" }, { collection: "records" }],
    },
  });

  const setProfileData = useSetAtom(profileAtom);
  const setRecords = useSetAtom(recordsAtom);

  useDidUpdate(() => {
    const profileIdx = docs.findIndex((doc) => doc.collection === "profile");
    const docsCopy = docs.slice();
    docsCopy.splice(profileIdx, 1);
    const records = docsCopy;

    if (profileIdx !== -1) setProfileData(docs[profileIdx]);
    if (records) setRecords(records);
  }, [docs]);

  return;
};

export default usePouchUserData;
