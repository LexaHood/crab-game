import { useEffect, useState } from "preact/hooks";

import type {  Tdimensions } from "@/App";
import StylerComponent from "@/components/StylerComponent";

import style from "./fish.scss?inline";

type Tcoords = {x: number, y: number};

// Todo: 
// - использовать ширину и высоту экрана

export default function Fish({ dimensions }: { dimensions: Tdimensions }) {
  function getRandomCoords() {
    return {
      x: Math.random() * dimensions.x,
      y: Math.random() * dimensions.y / 2,
    };
  }

  const [coords, setCoords] = useState<Tcoords>(getRandomCoords());
  let travelDuration = 3000 + Math.random() * 5000;

  useEffect(() => {
    travelDuration = 3000 + Math.random() * 5000;
    updateSwimDestination(travelDuration);
  }, []);

  function updateSwimDestination(tD: number) {
    setCoords(getRandomCoords());
    
    setTimeout(() => {
      updateSwimDestination(tD);
    }, tD);
  }

  return <StylerComponent style={style}>
    <div
      class="Fish"
      style={{
        transform: `translate(${coords.x}px, ${coords.y}px)`,
        transition: `transform ${travelDuration}ms linear`
      }}
    >
      <div class="Fish__body"></div>
    </div>
  </StylerComponent>;
}
