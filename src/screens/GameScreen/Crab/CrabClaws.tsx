import crabClawBig from "@/assets/crab_claw_big.svg";
import crabClawSmall from "@/assets/crab_claw_small.svg";
import StylerComponent from "@/components/StylerComponent";

import style from "./crabClaws.scss?inline";

export default function CrabClaws() {
  return <StylerComponent style={style}>
    <div class="CrabClaws">
      <div class="CrabClaws__clawWrapper">
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
    </div>
  </StylerComponent>;
}
