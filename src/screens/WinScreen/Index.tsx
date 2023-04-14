import { useState } from "preact/hooks";

import background from "@/assets/background.webp";
import start_button from "@/assets/start_button.png";
import start_button_pushed from "@/assets/start_button_pushed.png";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen } from "@/store";

import style from "./style.scss?inline";

export default function WinScreen() {
  const [startButtonImage, setStartButtonImage] = useState(start_button);

  return <StylerComponent style={style}>
    <div class="StartScreen">
      <img
        class="StartScreen__bg"
        src={background}
      />

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
