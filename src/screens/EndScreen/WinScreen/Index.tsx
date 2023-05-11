import background from "@/assets/background.webp";
import counter from "@/assets/counter.svg";
import recept_photo from "@/assets/recept_photo.png";
import shop from "@/assets/shop.png";
import tryAgain from "@/assets/try_again.svg";
import viewRecipe from "@/assets/view_recipe.svg";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen, resetGameParams, score } from "@/store";

import style from "./style.scss?inline";

export default function WinScreen() {

  return <StylerComponent style={style}>
    <div class="StartScreen">
      <img
        class="StartScreen__bg"
        src={background}
      />
      <div class="ShopElement">
        <div class="Score">
          <span
            class="Score__text"
          >{score}x</span>
          <img
            class="Score__counter__fish"
            src={counter}
          />
          <span
            class="Score__text"
          >=</span>
          <a
            href="https://putina.org/lightsaladcrab"
            target="_blank"
            class="Score__recipe"
          >
            <img
              src={viewRecipe}
              class="Score__recipe__btn"
            ></img>
            <img
              src={recept_photo}
              class="Score__recipe__img"
            />
          </a>
        </div>

        <img
          src={shop}
          class="Shop"
        />
        <img
          src={tryAgain}
          class="TryAgain__btn"
          onClick={ () => {
            resetGameParams();
            currentScreen.value = "game";
          }}
        />
      </div>
    </div>
  </StylerComponent>;
}
