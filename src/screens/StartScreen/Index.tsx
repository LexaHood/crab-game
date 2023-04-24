import { useState } from "preact/hooks";

import start_button from "@/assets/start_button.png";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen } from "@/store";

import style from "./style.scss?inline";

export default function StartScreen() {
  return <StylerComponent style={style}>
    <div class="StartScreen">
      <img
        src={start_button}
        class="StartScreen__startButton"
        onClick={() => currentScreen.value = "game"}
      />
    </div>
  </StylerComponent>;
}
