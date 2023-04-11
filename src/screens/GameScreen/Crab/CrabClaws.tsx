import { useEffect, useRef, useState } from "preact/hooks";

import crabClawBig from "@/assets/crab_claw_big.svg";
import crabClawSmall from "@/assets/crab_claw_small.svg";
import fish1 from "@/assets/fish_1.svg";
import StylerComponent from "@/components/StylerComponent";
import type { TCoords } from "@/store";
import { crabClaws } from "@/store";

import style from "./crabClaws.scss?inline";

export default function CrabClaws() {
  const leftClawRef = useRef<HTMLDivElement>(null);
  const rightClawRef = useRef<HTMLDivElement>(null);

  const [leftClawOffsets, setLeftClawOffsets] = useState<TCoords>({ x: 0, y: 0  });
  const [rightClawOffsets, setRightClawOffsets] = useState<TCoords>({ x: 0, y: 0  });

  useEffect(() => {
    if (!leftClawRef.current || !rightClawRef.current) {
      throw new Error("Claws not present");
    }

    const leftClawRect = leftClawRef.current.getBoundingClientRect();
    const rightClawRect = rightClawRef.current.getBoundingClientRect();

    setLeftClawOffsets({ x: leftClawRect.x, y: leftClawRect.y });
    setRightClawOffsets({ x: rightClawRect.x, y: rightClawRect.y });
  }, []);

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
          transform: `translate(${leftClawTranslate().x}px, ${leftClawTranslate().y}px)`
        }}
      >
        <div class="CrabClaws__clawWrapper__claw -left">
          <img
            class="CrabClaws__clawWrapper__claw__big"
            src={crabClawBig}
          />
          <img 
            class="CrabClaws__clawWrapper__claw__small"
            src={crabClawSmall}
          />
        </div>
      </div>

      <div
        ref={rightClawRef}
        class="CrabClaws__clawWrapper -right"
        style={{
          transform: `translate(${rightClawTranslate().x}px, ${rightClawTranslate().y}px)`
        }}
      >
        <div class="CrabClaws__clawWrapper__claw -right">
          <img
            class="CrabClaws__clawWrapper__claw__big"
            src={crabClawBig}
          />
          <img 
            class="CrabClaws__clawWrapper__claw__small"
            src={crabClawSmall}
          />
        </div>
      </div>
    </div>
  </StylerComponent>;
}
