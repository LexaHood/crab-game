import { useState } from "preact/hooks";

import background from "@/assets/background.webp";
import start_button from "@/assets/start_button.png";
import start_button_pushed from "@/assets/start_button_pushed.png";
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

      {/* TODO: Сделать смену картинки на startBtnPushed при наведении мыши */}
      <img
        src={start_button}
        class="StartScreen__startButton"
        onClick={() => currentScreen.value = "game"}
      />
    </div>
  </StylerComponent>;
}
