import crabLimbs from "@/assets/crab_limbs.svg";
import crabTorso from "@/assets/crab_torso.svg";
import StylerComponent from "@/components/StylerComponent";

import CrabClaws from "./CrabClaws";
import CrabEyes from "./CrabEyes";
import style from "./index.scss?inline";

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
