import { signal } from "@preact/signals";

export type TCoords = { x: number, y: number };
export type TScreens = "start" | "game";
export type TClaw = {
  id?: number,
  clawCords: TCoords
};
export type TClaws = {
  left?: TClaw,
  right?: TClaw
};

export const currentScreen = signal<TScreens>("start");
export const appDimensions = signal<TCoords | undefined>(undefined);
export const crabClaws = signal<TClaws>({});
export const score = signal<number>(0);
export const misses = signal<number>(0);
