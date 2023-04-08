import { signal } from "@preact/signals";

export type TCoords = { x: number, y: number };
export type TScreens = "start" | "game";
export type TClow = {
  id?: number,
  clawCords: TCoords
};
export type TClaws = {
  left?: TClow,
  right?: TClow
};

export const currentScreen = signal<TScreens>("start");
export const appDimensions = signal<TCoords | undefined>(undefined);
export const crabClaws = signal<TClaws>({});
