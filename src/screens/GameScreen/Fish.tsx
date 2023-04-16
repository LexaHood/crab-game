import { useSignal } from "@preact/signals";
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
import { appDimensions, crabClaws, score, TClaw, TClaws, TCoords } from "@/store";

import style from "./fish.scss?inline";
const fishImages = [
  fish1,
  fish2,
  fish3,
  fish4,
  fish5,
  fish6
];

export default function Fish(props: {fishId: number}) {
  const fishRef = useRef<HTMLDivElement>(null);

  const [fishImage, setFishImage] = useState<string>();
  const [fishOccupied, setFishOccupied] = useState(false);

  const movingLeft = useSignal<boolean>(Math.random() > .5);
  const coords = useSignal<TCoords>(getStartCoords(movingLeft.value));
  const travelDuration = useSignal<number>(randTime());
  const shouldSetDestination = useSignal(false);
  const endOfScreenTimer = useSignal<NodeJS.Timeout | null>(null);

  function getStartCoords(movingLeft: boolean): TCoords {
    if (!appDimensions.value) {
      throw new Error("Game started, but dimensions undefined");
    }

    const widen = appDimensions.value.width * (Math.random() + .1);

    return {
      x: movingLeft ? appDimensions.value.width + widen : -widen,
      y: Math.random() * appDimensions.value.height / 2,
    };
  }

  function getEndCoords(movingLeft: boolean): TCoords {
    if (!appDimensions.value) {
      throw new Error("Game started, but dimensions undefined");
    }

    const widen = appDimensions.value.width * (Math.random() + .1);

    return {
      x: movingLeft ? -widen : appDimensions.value.width + widen,
      y: coords.value.y,
    };
  }

  // TODO: По хорошему константные значения вынести в отдельный конифг
  function randTime() {
    const startTime = 2800;
    const endTime = 4200;
    const step = 100;
    return Math.floor(Math.random() * ((endTime - startTime) / step)) * step + startTime;
  }

  function initFishImage() {
    const randomIndex = Math.floor(Math.random() * fishImages.length);
    const importResult = fishImages[randomIndex];
    setFishImage(importResult);
  }

  function respawnFish() {
    setFishOccupied(false);
    initFishImage();
    movingLeft.value = !movingLeft.value;
    
    // Teleport fish to random side
    travelDuration.value = 0;
    coords.value = getStartCoords(movingLeft.value);
    shouldSetDestination.value = true;
  }

  // Set actual target
  useEffect(() => {
    if (!shouldSetDestination.value) {
      return;
    }
    
    shouldSetDestination.value = false;

    travelDuration.value = randTime();
    coords.value = getEndCoords(movingLeft.value);
  
    endOfScreenTimer.value = setTimeout(() => {
      respawnFish();
    }, travelDuration.value);
  }, [shouldSetDestination.value]);

  useEffect(() => {
    respawnFish();
  }, []);

  function onFishClick(event: MouseEvent) {
    if (!fishRef.current) {
      throw new Error("fish not created");
    }

    // Fish already being grabbed
    if (fishOccupied) {
      return;
    }

    // Both claws busy, can't grab
    if (crabClaws.value.left && crabClaws.value.right) {
      return;
    }

    setFishOccupied(true);
    if (endOfScreenTimer.value) clearTimeout(endOfScreenTimer.value);
    setTimeout(respawnFish, CLAW_TRAVEL_DELAY);
    const thisFishRef = fishRef.current.getBoundingClientRect();

    coords.value = { 
      x: thisFishRef.x - (appDimensions.value as DOMRect).x, 
      y: thisFishRef.y -  (appDimensions.value as DOMRect).y 
    };

    score.value += 1;

    // Populate claws
    let newCrabClaws: TClaws = {};
    const { left, right } = crabClaws.value;
    const newClaw: TClaw = {
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
        ...crabClaws.value,
        [left ? "right" : "left"]: newClaw
      };
    }

    crabClaws.value = newCrabClaws;
  }

  return <StylerComponent style={style}>
    <div
      ref={fishRef}
      class="Fish"
      style={{
        transform: `translate(${coords.value.x}px, ${coords.value.y}px)`,
        transition: `transform ${travelDuration.value}ms linear`,
      }}
    >
      <div class={cx(
        "Fish__flipper",
        { "-movingLeft": movingLeft.value }
      )}>
        <img
          src={fishImage}
          class="Fish__body"
          style={{
            animationDelay: `-${props.fishId * .2}s`,
            animationDuration: `${1 + props.fishId * .2}s`
          }}
          onClick={onFishClick}
        />
      </div>
    </div>
  </StylerComponent>;
}
