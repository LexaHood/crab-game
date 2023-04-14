import cx from "classnames";
import { useEffect, useRef, useState } from "preact/hooks";

import fish1 from "@/assets/fish_1.svg";
import fish2 from "@/assets/fish_2.svg";
import fish3 from "@/assets/fish_3.svg";
import fish4 from "@/assets/fish_4.svg";
import fish5 from "@/assets/fish_5.svg";
import fish6 from "@/assets/fish_6.svg";
import StylerComponent from "@/components/StylerComponent";
import { CLAW_TRAVEL_DELAY } from "@/constants";
import { appDimensions, crabClaws } from "@/store";

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
  fishId: number, 
  onFishClick: (event: MouseEvent, itemId: number, fishImage: string) => void
}) {
  function getRandomCoords() {
    if (!appDimensions.value) {
      throw new Error("Game started, but dimensions undefined");
    }

    return {
      x: Math.random() * appDimensions.value.width,
      y: Math.random() * appDimensions.value.height / 2,
    };
  }

  // TODO: По хорошему константные значения вынести в отдельный конифг
  function randTime(startTime: number, endTime: number) {
    const step = 100;
    return Math.floor(Math.random() * ((endTime - startTime) / step)) * step + startTime;
  }

  const fishRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState(getRandomCoords());
  // TODO: Закинуть хук на изменение времени анимации после ее конца
  const [travelDuration] = useState<number>(randTime(2800, 4200));
  const [fishImage, setFishImage] = useState<string>();
  const [timerId, setTimerId] = useState<number | NodeJS.Timer | undefined >();
  const [fishIsDead, setFishIsDead] = useState<boolean>(false);
  const [movingLeft, setMovingLeft] = useState<boolean>(false);
  const [fishOccupied, setFishOccupied] = useState(false);

  async function initFishImage() {
    const randomIndex = Math.floor(Math.random() * fishImages.length);
    const importResult = fishImages[randomIndex];
    setFishImage(importResult);
  }

  function updateCoords() {
    const newCoords = getRandomCoords();
    setCoords((prevCords) => {
      setMovingLeft(newCoords.x < prevCords.x);
      return newCoords;
    });
  }

  useEffect(() => {
    initFishImage();

    updateCoords();
    setTimerId(setInterval(() => {
      updateCoords();
    }, travelDuration));
  }, []);

  function onFishClick(event: MouseEvent) {
    if (fishOccupied) {
      return;
    }

    if (crabClaws.value.left && crabClaws.value.right) {
      return;
    }

    setFishOccupied(true);
    setTimeout(() => setFishIsDead(true), CLAW_TRAVEL_DELAY);
    clearInterval(timerId);
    if (!fishRef.current) {
      throw new Error("fish not created");
    }
    const thisFishRef = fishRef.current.getBoundingClientRect();

    setCoords({ x: thisFishRef.x - (appDimensions.value as DOMRect).x, y: thisFishRef.y -  (appDimensions.value as DOMRect).y });

    return props.onFishClick(event, props.fishId, fishImage as string);
  }

  return <StylerComponent style={style}>
    <div
      ref={fishRef}
      class="Fish"
      style={{
        transform: `translate(${coords.x}px, ${coords.y}px)`,
        transition: `transform ${travelDuration}ms ease-in-out`,
        display: fishIsDead ? "none" : "block"
      }}
      onClick={onFishClick}
    >
      <div class={cx(
        "Fish__flipper",
        { "-movingLeft": movingLeft }
      )}>
        <img
          src={fishImage}
          class="Fish__body"
          style={{
            animationDelay: `-${props.fishId * .2}s`,
            animationDuration: `${1 + props.fishId * .2}s`
          }}
        />
      </div>
    </div>
  </StylerComponent>;
}
