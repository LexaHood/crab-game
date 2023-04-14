import counter from "@/assets/counter.svg";
import StylerComponent from "@/components/StylerComponent";
import { score } from "@/store";

import style from "./ui.scss?inline";

export default function Ui() {
  return <StylerComponent style={style}>
    <div class='Ui' >
      <p class="Score">
        {score}x
        <img
          class="Claw"
          src={counter}
        />
      </p>
    </div>
  </StylerComponent>;
}
