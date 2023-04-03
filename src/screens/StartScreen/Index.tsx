import background from "@/assets/background.webp";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen } from "@/store";

import style from "./style.scss?inline";

export default function StartScreen() {
  return <StylerComponent style={style}>
    <div class="StartScreen">
      <img
        class="StartScreen__bg"
        src={background}
      />
      <h1 class="StartScreen__title">
        Веселый краб
      </h1>

      <button
        onClick={() => currentScreen.value = "game"}
        class="StartScreen__startButton"
      >
        Начать игру
      </button>
    </div>
  </StylerComponent>;
}
