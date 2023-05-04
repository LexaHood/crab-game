import background from "@/assets/background.webp";
import loseBanner from "@/assets/lose_banner.png";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen,  resetGameParams } from "@/store";

import style from "./style.scss?inline";

export default function LoseScreen() {
  return <StylerComponent style={style}>
    <div class="LoseScreen">
      <img
        class="LoseScreen__bg"
        src={background}
      />
      <div class="LoseScreen__contents">
        <img
          class="LoseBanner"
          src={loseBanner}
        />
        <h1 class="Ques__Symbl">?</h1>
        <button
          class="Reset__btn"
          onClick={ () => {
            resetGameParams();
            currentScreen.value = "game";
          } }
        >Попробовать снова</button>
      </div>
    </div>

  </StylerComponent>;
}
