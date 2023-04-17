import { useEffect, useState } from "preact/hooks";

import crabStick from "@/assets/crab_sticks.png";
import StylerComponent from "@/components/StylerComponent";
import { appDimensions, TCoords } from "@/store";

import style from "./life.scss?inline";

export default function Healths() {
  const time = 0;
  const [coords, setCoords] = useState<TCoords>(() => {
    if (!appDimensions.value) {
      throw new Error("Game started, but dimensions undefined");
    }
    return {
      x: Math.random() * appDimensions.value.x,
      y: Math.random() * appDimensions.value.y / 2,
    };
  });

  return <StylerComponent style={style}>
    <img
      class="Life"
      src={crabStick} 
      style={{
        transform: `translate(${coords.x - 100}px, ${coords.y}px)`,
        transition: "transform 5000ms ease-in-out",
      }}
    />
  </StylerComponent>;
}
