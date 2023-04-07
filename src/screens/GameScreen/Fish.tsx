import { useEffect, useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import { appDimensions } from "@/store";

import style from "./fish.scss?inline";

const fishImages = Object.values(import.meta.glob("@/assets/fish_*.svg"));

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

  const [coords, setCoords] = useState(getRandomCoords());
  const [travelDuration] = useState<number>(4000 + Math.random() * 4000);
  const [fishImage, setFishImage] = useState<string>();

  async function initFishImage() {
    const randomIndex = Math.floor(Math.random() * fishImages.length);
    const importResult = await fishImages[randomIndex]() as { default: string };
    setFishImage(importResult.default);
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
      Fish name: {props.name}
      <img
        src={fishImage}
        class="Fish__body"
      />
    </div>
  </StylerComponent>;
}
