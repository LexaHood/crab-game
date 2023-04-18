import background from "@/assets/background.webp";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen, misses, totalHealth } from "@/store";

import Crab from "./Crab/Index";
import Fishes from "./Fishes/Fishes";
import Lifes from "./Lifes/Lifes";
import style from "./style.scss?inline";
import Ui from "./Ui/Ui";

export default function GameScreen() {
  misses.subscribe((value) => {
    if (totalHealth - value <= 0)
      currentScreen.value = "win";
  });

  return <StylerComponent style={style}>
    <div class="GameScreen">
      <img class="GameScreen__bg" src={background} />
      <Ui />
      <Lifes />
      <Crab />
      <Fishes />
    </div>
  </StylerComponent>;
}
