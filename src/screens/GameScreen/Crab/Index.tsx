import crabLimbs from "@/assets/crab_limbs.svg";
import crabTorso from "@/assets/crab_torso.svg";
import StylerComponent from "@/components/StylerComponent";
import { crabClaws, nextLeft, TClaw, TClaws } from "@/store";

import CrabClaws from "./CrabClaws";
import CrabEyes from "./CrabEyes";
import style from "./index.scss?inline";

export function sendClaw(event: MouseEvent, fishImage?: string) {
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
    const clawName = nextLeft.value ? "left" : "right";
    newCrabClaws[clawName] = newClaw;
  } else {
    newCrabClaws = {
      ...crabClaws.value,
      [left ? "right" : "left"]: newClaw
    };
  }

  nextLeft.value = !nextLeft.value;
  crabClaws.value = newCrabClaws;
}

export default function Crab() {
  return <StylerComponent style={style}>
    <div class="Crab">
      <div class="Crab__body">
        <img
          src={crabLimbs}
          class="Crab__body__limbs"
        />
        <div class="Crab__body__torsoRotator">
          <img
            src={crabTorso}
            class="Crab__body__torsoRotator__torso"
          />
        </div>

        <CrabEyes />
      </div>

      <CrabClaws />
    </div>
  </StylerComponent>;
}
