import background from "@/assets/background.webp";
import bigQuestion from "@/assets/big_question.svg";
import loseBanner from "@/assets/lose_banner.svg";
import tryAgain from "@/assets/try_again.svg";
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
      <img
        class="LoseBanner"
        src={loseBanner}
      />
      <img 
        class="Ques__Symbl"
        src={bigQuestion} 
      />
      <img
        src={tryAgain}
        class="Reset__btn"
        onClick={ () => {
          resetGameParams();
          currentScreen.value = "game";
        } }
      />
    </div>

  </StylerComponent>;
}
