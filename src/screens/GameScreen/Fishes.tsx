/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import { crabClaws, TClaws, TClow } from "@/store";

import Fish from "./Fish";
import style from "./fishes.scss?inline";

export default function Fishes() {
  const fishTotalAmount = 10;
  const [fishes, deleteFish] = useState(() => {
    return Array.from({ length: fishTotalAmount }, (_, i) => {
      return { id: i, name: `Fish_${i}` };
    });
  });

  function handleClick(event: MouseEvent, itemId: number) {
    let newCrabClaws: TClaws = {};
    const { left, right } = crabClaws.value;
    const newClaw: TClow = {
      id: itemId,
      clawCords: {
        x: event.clientX,
        y: event.clientY
      }
    };

    if (Object.keys(crabClaws.value).length < 2) {
      if (!left && !right) {
        const clawName = Math.random() > 0.5 ? "left" : "right";
        newCrabClaws[clawName] = newClaw;
      } else {
        newCrabClaws = {
          [left ? "right" : "left"]: newClaw,
          ...crabClaws.value
        };
      }

      // crabClaws.value = newCrabClaws;
      // deleteFish(prevFishes => prevFishes.filter(fish => fish.id !== itemId));
    }

    // TODO: Когда клешни будут возвращаться, убрать эту строчку. пока что, пусть обнуляются
    crabClaws.value = newCrabClaws;
  }

  return <StylerComponent style={style}>
    {fishes.map((fish) => {
      return <Fish key={fish.id} name={fish.name} onClick={(event: any) => handleClick(event, fish.id)} />;
    })}
  </StylerComponent>;
}
