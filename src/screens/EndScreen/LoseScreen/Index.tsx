import background from "@/assets/background.webp";
import loseBanner from "@/assets/lose_banner.png";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen,  resetGameParams } from "@/store";

import style from "./style.scss?inline";

export default function LoseScreen() {
  return <StylerComponent style={style}>
    <div class="StartScreen">
      <img
        class="StartScreen__bg"
        src={background}
      />
      <img
        src={loseBanner}
      />
      <button
        class="Reset__btn"
        style="margin: 30px "
        onClick={ () => {
          resetGameParams();
          currentScreen.value = "game";
        } }
      >Попробовать снова</button>
    </div>

  </StylerComponent>;
}
