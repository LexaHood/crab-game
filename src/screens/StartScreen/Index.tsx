import type { StateUpdater } from "preact/hooks";

import type { screens } from "@/App";
import background from "@/assets/background.jpg";
import StylerComponent from "@/components/StylerComponent";

import style from "./style.scss?inline";

export default function StartScreen({ setScreen }: { setScreen: StateUpdater<keyof typeof screens> }) {
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
        onClick={() => setScreen("gameScreen")}
        class="StartScreen__startButton"
      >
        Начать игру
      </button>
    </div>
  </StylerComponent>;
}
