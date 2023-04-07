import { useEffect } from "preact/hooks";

import crabLimbs from "@/assets/crab_limbs.svg";
import crabTorso from "@/assets/crab_torso.svg";
import StylerComponent from "@/components/StylerComponent";
import { claws } from "@/store";

import CrabEyes from "./CrabEyes";
import style from "./index.scss?inline";

export default function Crab() {
  useEffect(() => {
    console.log(claws.value);
  }, [claws.value]);

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
    </div>
  </StylerComponent>;
}
