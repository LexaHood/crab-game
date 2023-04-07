import { signal } from "@preact/signals";

export type TCoords = { x: number, y: number };
export type TScreens = "start" | "game";
export type TClaws = {
  left?: {
    id?: number,
    clawCords: TCoords
  },
  right?: {
    id?: number,
    clawCords: TCoords
  }
};

export const currentScreen = signal<TScreens>("start");
export const appDimensions = signal<TCoords | undefined>(undefined);
export const claws = signal<TClaws>({});
