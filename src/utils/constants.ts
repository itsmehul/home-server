
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
  RiCalendarFill,
  RiLoginCircleLine,
  RiStickyNoteFill,
  RiUser3Fill,
} from "react-icons/ri";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    toneOne: string;
    colors: Record<string, string>;
    fontSizes: Record<string, string>;
    toneTwo: string;
  }
}

export const theme: DefaultTheme = {
  colors: {},
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "24px",
  },
  toneOne: "#000000",
  toneTwo: "#ffffff",
};

export const showPwaInstallButtonAtom = atomWithStorage<any | null>(
  "pwa-installed",
  null
);

export const pages = {
  0: [
    {
      pathname: "/app/routines",
      icon: RiCalendarFill,
    },
    {
      pathname: "/app/journal",
      icon: RiStickyNoteFill,
    },
    {
      pathname: "/app/joinus",
      icon: RiLoginCircleLine,
    },
  ],
  1: [
    {
      pathname: "/app/routines",
      icon: RiCalendarFill,
    },
    {
      pathname: "/app/journal",
      icon: RiStickyNoteFill,
    },
    {
      pathname: "/app/profile",
      icon: RiUser3Fill,
    },
  ],
};

export const _duone = atomWithStorage("theme", {
  toneTwo: "#ffffff",
  toneOne: "#000000",
});

export const toastAtom = atom<
  | {
    isShown: false;
  }
  | {
    message: string;
    type: "success" | "error";
    isShown: true;
  }
>({ isShown: false });



