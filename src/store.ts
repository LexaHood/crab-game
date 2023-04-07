import { signal } from "@preact/signals";

export type TDimensions = { x: number, y: number };
export type TScreens = "start" | "game";

export type TClawsCords = {
  x: number,
  y: number
};

export type TClaws = {
  left: {
    id?: number,
    clawCords?: TClawsCords
  },
  right: {
    id?: number,
    clawCords?: TClawsCords
  }
};

export const currentScreen = signal<TScreens>("start");
export const appDimensions = signal<TDimensions | undefined>(undefined);
export const claws = signal<TClaws>({
  left: {},
  right: {}
});
