import { useState } from "preact/hooks";

import start_button from "@/assets/start_btn.svg";
import start_button_pushed from "@/assets/start_btn_pushed.svg";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen } from "@/store";

import style from "./style.scss?inline";

export default function StartScreen() {
  const [startButtonImage, setStartButtonImage] = useState(start_button);

  return <StylerComponent style={style}>
    <div class="StartScreen">
      <img
        src={startButtonImage}
        class="StartScreen__startButton"
        onClick={() => currentScreen.value = "game"}
        onMouseEnter={() => setStartButtonImage(start_button_pushed)}
        onMouseLeave={() => setStartButtonImage(start_button)}
      />
    </div>
  </StylerComponent>;
}
