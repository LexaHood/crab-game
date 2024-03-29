import { signal } from "@preact/signals";

export type TCoords = { x: number, y: number };
export type TScreens = "start" | "game" | "win" | "lose";
export type TClaw = {
  clawCords: TCoords,
  fishImage?: string
};
export type TClaws = {
  left?: TClaw,
  right?: TClaw
};

export const currentScreen = signal<TScreens>("start");
export const appDimensions = signal<DOMRect | undefined>(undefined);
export const crabClaws = signal<TClaws>({});
export const score = signal<number>(0);
export const misses = signal<number>(0);
export const nextLeft = signal(Math.random() > 0.5);

export const totalHealth = 3;
export const requiredWinScore = 15;
export const fishTotalAmount = 15;

export function resetGameParams() {
  score.value = 0;
  misses.value = 0;
  crabClaws.value = {};
}
