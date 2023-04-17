import { useSignal } from "@preact/signals";
import { useEffect, useRef, useState } from "preact/hooks";

import crabStickImage from "@/assets/crab_sticks.png";
import StylerComponent from "@/components/StylerComponent";
import { CLAW_TRAVEL_DELAY } from "@/constants";
import { appDimensions, crabClaws, misses, TCoords } from "@/store";

import { sendClaw } from "./Crab/Index";
import style from "./hp.scss?inline";

export default function Hp() {
  const hpRef = useRef<HTMLDivElement>(null);
  const hpSpawned = useSignal<boolean>(true);
  const hpDestroyed = useSignal<boolean>(false);
  const [hpOccupied, setHpOccupied] = useState<boolean>(false);
  const coords = useSignal<TCoords>((() => {
    if (!appDimensions.value) {
      throw new Error("Game started, but dimensions undefined");
    }
    return {
      // TODO: Сделать ограничение на спавн от 10% до 90% по Х
      x: Math.random() * appDimensions.value.width,
      y: 0,
    };
  })());

  useEffect(() => {
    if (!hpSpawned.value) {
      return;
    }

    if (!appDimensions.value) {
      throw new Error("Game started, but dimensions undefined");
    }

    hpSpawned.value = false;

    coords.value = {
      x: coords.value.x,
      y: appDimensions.value.height * 1.1
    };
  }, [hpSpawned.value]);

  function onHpClick(event: MouseEvent) {
    event.stopPropagation();

    if (!hpRef.current) {
      throw new Error("hp not created");
    }

    if (hpOccupied) {
      return;
    }

    if (crabClaws.value.left && crabClaws.value.right) {
      return;
    }

    setHpOccupied(true);

    const thisHpRef = hpRef.current.getBoundingClientRect();

    coords.value = {
      x: thisHpRef.x - (appDimensions.value as DOMRect).x,
      y: thisHpRef.y - (appDimensions.value as DOMRect).y
    };

    misses.value--;

    sendClaw(event, crabStickImage);
    setTimeout(() => (hpDestroyed.value = true), CLAW_TRAVEL_DELAY);
  }

  return <StylerComponent style={style}>
    <div class="Hp"
      ref={hpRef}
      style={{
        transform: `translate(${coords.value.x}px, ${coords.value.y}px)`,
        transition: "transform 4s linear",
      }}
    >
      <img
        class="Hp__body"
        src={crabStickImage}
        style={{
          animationDuration: "1.5s",
          "animation-name": hpOccupied ? "none" : "bob__horizontal",
          display: hpDestroyed.value ? "none" : "block"
        }}
        onMouseDown={onHpClick}
      />
    </div>
  </StylerComponent>;
}
