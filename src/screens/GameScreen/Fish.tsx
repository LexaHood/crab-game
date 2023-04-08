import { useEffect, useState } from "preact/hooks";

import fish1 from "@/assets/fish_1.svg";
import fish2 from "@/assets/fish_2.svg";
import fish3 from "@/assets/fish_3.svg";
import fish4 from "@/assets/fish_4.svg";
import fish5 from "@/assets/fish_5.svg";
import fish6 from "@/assets/fish_6.svg";
import StylerComponent from "@/components/StylerComponent";
import { appDimensions } from "@/store";

import style from "./fish.scss?inline";
const fishImages = [
  fish1,
  fish2,
  fish3,
  fish4,
  fish5,
  fish6
];

export default function Fish( props: {
  key: number, name: string, onClick: (event: MouseEvent, itemId: number) => void
}) {
  function getRandomCoords() {
    if (!appDimensions.value) {
      throw new Error("Game started, but dimensions undefined");
    }

    return {
      x: Math.random() * appDimensions.value.x,
      y: Math.random() * appDimensions.value.y / 2,
    };
  }

  // TODO: По хорошему константные значения вынести в отдельный конифг
  function randTime(startTime: number, endTime: number) {
    const step = 100;
    return Math.floor(Math.random() * ((endTime - startTime) / step)) * step + startTime;
  }

  const [coords, setCoords] = useState(getRandomCoords());
  // TODO: Закинуть хук на изменение времени анимации после ее конца
  const [travelDuration] = useState<number>(randTime(2800, 4200));
  const [fishImage, setFishImage] = useState<string>();

  async function initFishImage() {
    const randomIndex = Math.floor(Math.random() * fishImages.length);
    const importResult = fishImages[randomIndex];
    setFishImage(importResult);
  }

  useEffect(() => {
    initFishImage();
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
      onClick={(event) => props.onClick(event, props.key)}
    >
      <p style={{ color: "white" }}>Fish name: {props.name}</p>
      <p style={{ color: "white" }}>TimeSpeed: {travelDuration}</p>
      <img
        src={fishImage}
        class="Fish__body"
      />
    </div>
  </StylerComponent>;
}
