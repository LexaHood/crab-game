import { useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import { sendClaw } from "@/screens/GameScreen/Crab/Index";
import { fishTotalAmount, misses } from "@/store";

import Fish from "./Fish/Fish";
import style from "./fishes.scss?inline";

export default function Fishes() {
  const [fishes] = useState(() => {
    return Array.from({ length: fishTotalAmount }, (_, i) => {
      return { id: i };
    });
  });

  function handleMiss(event: MouseEvent) {
    misses.value += 1;

    sendClaw(event);
  }

  return <StylerComponent style={style}>
    <div
      class="Fishes"
      onMouseDown={handleMiss}
    >
      {fishes.map((fish) => {
        return <Fish
          key={fish.id}
          fishId={fish.id}
          sendClaw={sendClaw}
        />;
      })}
    </div>
  </StylerComponent>;
}
