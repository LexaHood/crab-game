/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import { claws } from "@/store";

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
    console.log(`Clicked item ${itemId}`);
    claws.value = {
      ...claws.value,
      right: {
        id: itemId,
        // Временные данные!
        clawCords: {
          x: 0,
          y: 0
        }
      }
    };
    deleteFish(prevFishes => prevFishes.filter(fish => fish.id !== itemId));
  }

  return <StylerComponent style={style}>
    {fishes.map((fish) => {
      return <Fish key={fish.id} name={fish.name} onClick={(event: any) => handleClick(event, fish.id)}/>;
    })}
  </StylerComponent>;
}
