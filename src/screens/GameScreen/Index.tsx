import background from "@/assets/background.webp";
import StylerComponent from "@/components/StylerComponent";

import Crab from "./Crab/Index";
import Fishes from "./Fishes";
import style from "./style.scss?inline";
import Ui from "./Ui";

export default function GameScreen() {
  return <StylerComponent style={style}>
    <div class="GameScreen">
      <img class="GameScreen__bg" src={background}/>
      <Ui />
      <Fishes />
      <Crab />
    </div>
  </StylerComponent>;
}
