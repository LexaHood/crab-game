import { useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import { misses } from "@/store";

import Fish from "./Fish";
import style from "./fishes.scss?inline";

export default function Fishes() {
  const fishTotalAmount = 15;
  const [fishes] = useState(() => {
    return Array.from({ length: fishTotalAmount }, (_, i) => {
      return { id: i };
    });
  });

  function handleMiss() {
    misses.value += 1;
  }

  return <StylerComponent style={style}>
    <div 
      class="Fishes"
      onClick={handleMiss}
    >
      {fishes.map((fish) => {
        return <Fish
          key={fish.id}
          fishId={fish.id}
        />;
      })}
    </div>
  </StylerComponent>;
}
