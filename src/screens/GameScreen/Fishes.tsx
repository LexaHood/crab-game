import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import type { TClaw, TClaws } from "@/store";
import { crabClaws, misses } from "@/store";

import Fish from "./Fish";
import style from "./fishes.scss?inline";

export default function Fishes() {
  const fishTotalAmount = 15;
  const [fishes] = useState(() => {
    return Array.from({ length: fishTotalAmount }, (_, i) => {
      return { id: i };
    });
  });
  const nextLeft = useSignal(Math.random() > 0.5);

  function handleMiss(event: MouseEvent) {
    misses.value += 1;

    sendClaw(event);
  }

  function sendClaw(event: MouseEvent, fishImage?: string) {
    // Populate claws
    let newCrabClaws: TClaws = {};
    const { left, right } = crabClaws.value;
    const newClaw: TClaw = {
      clawCords: {
        x: event.clientX,
        y: event.clientY
      },
      fishImage
    };

    if (left && right) {
      return;
    }

    if (!left && !right) {
      const clawName = nextLeft.value ? "left" : "right";
      newCrabClaws[clawName] = newClaw;
    } else {
      newCrabClaws = {
        ...crabClaws.value,
        [left ? "right" : "left"]: newClaw
      };
    }

    nextLeft.value = !nextLeft.value;
    crabClaws.value = newCrabClaws;
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
          sendClaw={sendClaw}
        />;
      })}
    </div>
  </StylerComponent>;
}
