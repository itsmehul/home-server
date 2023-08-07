import { Flex, Loader } from "@/components/Auxilary";
import useGoogleOneTapSignin from "@/components/Pwa/useGoogleOneTapSignin";
import usePouchProfile from "@/components/Pwa/usePouchProfile";
import { fetchUserDataId } from "@/utils/helpers";
import PouchDB from "pouchdb";
import React from "react";
import { useDidMount } from "rooks";
import { usePouch } from "use-pouchdb";

interface AppWrapperProps {
  children: React.ReactNode;
}

const PouchDbSync = ({ children }: AppWrapperProps) => {
  const [loading, setLoading] = React.useState(true);
  useGoogleOneTapSignin(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!);
  usePouchProfile();

  const local_db = usePouch();
  const local_routines = usePouch("local_routines");

  useDidMount(async () => {
    const remote_routines = new PouchDB(
      `${process.env.NEXT_PUBLIC_CDB_PROXY}/routines`,
      {
        auth: {
          username: "arch",
          password: "mehul",
        },
      }
    );

    local_routines.sync(remote_routines);

    const userId = fetchUserDataId();
    if (!userId) {
      setLoading(false);
      return;
    }
    const pdb = new PouchDB(`${process.env.NEXT_PUBLIC_CDB_PROXY}/${userId}`, {
      auth: {
        username: "arch",
        password: "mehul",
      },
    });

    const result = await pdb.find({
      selector: { collection: "profile" },
    });

    if (result.docs.length === 0) {
      await local_db.post({
        collection: "profile",
        money: 500,
        sprites: {},
        createdAt: new Date().toISOString(),
      });
    } else {
      setLoading(false);
    }

    local_db.sync(pdb);
    setLoading(false);
  });

  if (loading) {
    return (
      <Flex justify="center" align="center" expand>
        <Loader />
      </Flex>
    );
  }

  return <>{children}</>;
};

export default PouchDbSync;
