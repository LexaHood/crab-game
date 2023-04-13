/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import { crabClaws, TClaw, TClaws } from "@/store";

import Fish from "./Fish";
import style from "./fishes.scss?inline";

export default function Fishes() {
  const fishTotalAmount = 10;
  const [fishes, deleteFish] = useState(() => {
    return Array.from({ length: fishTotalAmount }, (_, i) => {
      return { id: i, name: `Fish_${i}` };
    });
  });

  function handleClick(event: MouseEvent, itemId: number, fishImage: string) {
    let newCrabClaws: TClaws = {};
    const { left, right } = crabClaws.value;
    const newClaw: TClaw = {
      id: itemId,
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
      const clawName = Math.random() > 0.5 ? "left" : "right";
      newCrabClaws[clawName] = newClaw;
    } else {
      newCrabClaws = {
        [left ? "right" : "left"]: newClaw,
        ...crabClaws.value
      };
    }

    crabClaws.value = newCrabClaws;
  }

  return <StylerComponent style={style}>
    {fishes.map((fish) => {
      return <Fish 
        key={fish.id} 
        name={fish.name} 
        onFishClick={handleClick} 
      />;
    })}
  </StylerComponent>;
}
