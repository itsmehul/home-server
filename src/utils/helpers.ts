import dayjs from "dayjs";
import tinycolor from "tinycolor2";

export const isDateSameAsToday = (dateString: string): boolean => {
  const date = dayjs(dateString).startOf("day");
  const today = dayjs().startOf("day");
  return date.isSame(today);
};


export const removeUndefinedFromObject = (obj: any) => {
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
  return obj;
};



export const getShade = (c1: string, c2: string) => {
  if (tinycolor(c1).getLuminance() > tinycolor(c2).getLuminance()) {
    return tinycolor(c2).lighten(30).toString();
  } else {
    return tinycolor(c2).darken(30).toString();
  }
};

export const checkIfAExistsInB = <T>(a: T[], b: T[]) => {
  try {
    return a.some((item) => b.includes(item));
  } catch (error) {
    return false;
  }
};

export const removeAfromB = <T>(a: T[], b: T[]) => {
  return b.filter((item) => !a.includes(item));
};

type Func = (...args: any[]) => any;

export const debounce = <F extends Func>(func: F, delay: number) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise((resolve) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => resolve(func(...args)), delay);
    });
};

export const getMutedColor = (
  c1: string,
  c2: string,
  intensity: number = 5
) => {
  if (tinycolor(c1).getLuminance() > tinycolor(c2).getLuminance()) {
    return tinycolor(c2).lighten(intensity).toString();
  } else {
    return tinycolor(c2).darken(intensity).toString();
  }
};
