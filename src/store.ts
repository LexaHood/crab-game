import { signal } from "@preact/signals";

export type TDimensions = { x: number, y: number };
export type TScreens = "start" | "game";

export const currentScreen = signal<TScreens>("start");
export const appDimensions = signal<TDimensions | undefined>(undefined);
