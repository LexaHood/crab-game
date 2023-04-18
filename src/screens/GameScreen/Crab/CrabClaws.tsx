import cx from "classnames";
import { useEffect, useRef, useState } from "preact/hooks";

import crabClawBig from "@/assets/crab_claw_big.svg";
import crabClawSmall from "@/assets/crab_claw_small.svg";
import StylerComponent from "@/components/StylerComponent";
import { CLAW_TRAVEL_DELAY } from "@/constants";
import { TCoords } from "@/store";
import { crabClaws } from "@/store";

import style from "./crabClaws.scss?inline";

export default function CrabClaws() {
  const leftClawRef = useRef<HTMLDivElement>(null);
  const rightClawRef = useRef<HTMLDivElement>(null);

  const [leftClawOffsets, setLeftClawOffsets] = useState<TCoords>({ x: 0, y: 0 });
  const [rightClawOffsets, setRightClawOffsets] = useState<TCoords>({ x: 0, y: 0 });
  const [leftClawMoving, setLeftClawMoving] = useState(false);
  const [leftClawHasFish, setLeftClawHasFish] = useState(false);
  const [rightClawMoving, setRightClawMoving] = useState(false);
  const [rightClawHasFish, setRightClawHasFish] = useState(false);

  function onScroll() {
    const leftClawRect = (leftClawRef.current as HTMLDivElement).getBoundingClientRect();
    const rightClawRect = (rightClawRef.current as HTMLDivElement).getBoundingClientRect();

    setLeftClawOffsets({ x: leftClawRect.x, y: leftClawRect.y });
    setRightClawOffsets({ x: rightClawRect.x, y: rightClawRect.y });
  }

  useEffect(() => {
    if (!leftClawRef.current || !rightClawRef.current) {
      throw new Error("Claws not present");
    }

    const leftClawRect = leftClawRef.current.getBoundingClientRect();
    const rightClawRect = rightClawRef.current.getBoundingClientRect();

    setLeftClawOffsets({ x: leftClawRect.x, y: leftClawRect.y });
    setRightClawOffsets({ x: rightClawRect.x, y: rightClawRect.y });

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (crabClaws.value.left) {
      setLeftClawMoving(true);

      setTimeout(() => {
        setLeftClawMoving(false);
      }, CLAW_TRAVEL_DELAY * .9);
      setTimeout(() => {
        setLeftClawHasFish(true);
      }, CLAW_TRAVEL_DELAY);

      setTimeout(() => {
        crabClaws.value = {
          ...crabClaws.value,
          left: undefined
        };
        setLeftClawHasFish(false);
      }, CLAW_TRAVEL_DELAY * 2);
    }
  }, [crabClaws.value.left]);

  useEffect(() => {
    if (crabClaws.value.right) {
      setRightClawMoving(true);

      setTimeout(() => {
        setRightClawMoving(false);
      }, CLAW_TRAVEL_DELAY * .9);
      setTimeout(() => {
        setRightClawHasFish(true);
      }, CLAW_TRAVEL_DELAY);

      setTimeout(() => {
        crabClaws.value = {
          ...crabClaws.value,
          right: undefined
        };
        setRightClawHasFish(false);
      }, CLAW_TRAVEL_DELAY * 2);
    }
  }, [crabClaws.value.right]);

  function leftClawTranslate(): TCoords {
    if (!crabClaws.value.left) {
      return {
        x: 0,
        y: 0
      };
    }

    return {
      x: crabClaws.value.left.clawCords.x - leftClawOffsets.x,
      y: crabClaws.value.left.clawCords.y - leftClawOffsets.y
    };
  }

  function rightClawTranslate(): TCoords {
    if (!crabClaws.value.right) {
      return {
        x: 0,
        y: 0
      };
    }

    return {
      x: crabClaws.value.right.clawCords.x - rightClawOffsets.x,
      y: crabClaws.value.right.clawCords.y - rightClawOffsets.y
    };
  }

  return <StylerComponent style={style}>
    <div class="CrabClaws">
      <div
        ref={leftClawRef}
        class="CrabClaws__clawWrapper -left"
        style={{
          transform: `translate(${leftClawTranslate().x}px, calc(${leftClawTranslate().y}px - 15%))`
        }}
      >
        <div class="CrabClaws__clawWrapper__claw -left">
          <img
            class={cx(
              "CrabClaws__clawWrapper__claw__big -left",
              { "-open": leftClawMoving }
            )}
            src={crabClawBig}
          />
          {leftClawHasFish && <img
            src={crabClaws.value.left?.fishImage}
            class="CrabClaws__clawWrapper__claw__prey"
          />}
          <img
            class={cx(
              "CrabClaws__clawWrapper__claw__small -left",
              { "-open": leftClawMoving }
            )}
            src={crabClawSmall}
          />
        </div>
      </div>

      <div
        ref={rightClawRef}
        class="CrabClaws__clawWrapper -right"
        style={{
          transform: `translate(calc(${rightClawTranslate().x}px + 100%), calc(${rightClawTranslate().y}px - 15%))`
        }}
      >
        <div class="CrabClaws__clawWrapper__claw -right">
          <img
            class={cx(
              "CrabClaws__clawWrapper__claw__big -right",
              { "-open": rightClawMoving }
            )}
            src={crabClawBig}
          />
          {rightClawHasFish && <img
            src={crabClaws.value.right?.fishImage}
            class="CrabClaws__clawWrapper__claw__prey"
          />}
          <img
            class={cx(
              "CrabClaws__clawWrapper__claw__small -right",
              { "-open": rightClawMoving }
            )}
            src={crabClawSmall}
          />
        </div>
      </div>
    </div>
  </StylerComponent>;
}
