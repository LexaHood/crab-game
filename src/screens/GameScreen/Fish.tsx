import { useEffect, useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import { appDimensions } from "@/store";

import style from "./fish.scss?inline";

export default function Fish() {
  function getRandomCoords() {
    if (!appDimensions.value) {
      throw new Error("Game started, but dimensions undefined");
    }

    return {
      x: Math.random() * appDimensions.value.x,
      y: Math.random() * appDimensions.value.y / 2,
    };
  }

  const [coords, setCoords] = useState(getRandomCoords());
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
