import counter from "@/assets/counter.svg";
import heart from "@/assets/heart.svg";
import StylerComponent from "@/components/StylerComponent";
import { misses, score, totalHealth } from "@/store";

import style from "./ui.scss?inline";

export default function Ui() {
  return <StylerComponent style={style}>
    <div class="Ui" >
      <p class="Score">
        <span>{score}</span>
        x
        <img
          class="Claw"
          src={counter}
        />
      </p>
      {/* TODO: Надо выровнять сердечки в правом верхнем углу */}
      <div class="Health">
        {Array.from({ length: totalHealth - misses.value }, (_, i) => {
          return <img class="Heart" key={i} src={heart} />;
        })}
      </div>
    </div>
  </StylerComponent>;
}
