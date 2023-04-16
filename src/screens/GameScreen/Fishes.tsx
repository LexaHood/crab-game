/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";

import Fish from "./Fish";
import style from "./fishes.scss?inline";

export default function Fishes() {
  const fishTotalAmount = 15;
  const [fishes] = useState(() => {
    return Array.from({ length: fishTotalAmount }, (_, i) => {
      return { id: i };
    });
  });

  return <StylerComponent style={style}>
    {fishes.map((fish) => {
      return <Fish
        key={fish.id}
        fishId={fish.id}
      />;
    })}
  </StylerComponent>;
}
