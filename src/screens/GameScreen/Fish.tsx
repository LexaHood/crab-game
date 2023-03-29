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
  const [travelDuration] = useState<number>(4000 + Math.random() * 4000);

  useEffect(() => {
    setCoords(getRandomCoords());

    setInterval(() => {
      setCoords(getRandomCoords());
    }, travelDuration);
  }, []);

  return <StylerComponent style={style}>
    <div
      class="Fish"
      style={{
        transform: `translate(${coords.x - 100}px, ${coords.y}px)`,
        transition: `transform ${travelDuration}ms ease-in-out`
      }}
    >
      <div class="Fish__body"></div>
    </div>
  </StylerComponent>;
}
