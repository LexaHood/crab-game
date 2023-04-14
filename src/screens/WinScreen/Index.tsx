import { useState } from "preact/hooks";

import background from "@/assets/background.webp";
import counter from "@/assets/counter.svg";
import recept_photo from "@/assets/recept_photo.png";
import shop from "@/assets/shop.png";
import StylerComponent from "@/components/StylerComponent";
import { score } from "@/store";

import style from "./style.scss?inline";

export default function WinScreen() {

  return <StylerComponent style={style}>
    <div class="StartScreen">
      <img
        class="StartScreen__bg"
        src={background}
      />
      <div class="ShopElement">
        <p class="Score">
          {score}x
          <img
            src={counter}
          />
          =
          <div class="Recept">
            <a class="Btn" href="https://freefrontend.com/css-buttons/">Смотреть рецепт</a>
            <img src={recept_photo}/>
          </div>
        </p>
        <img
          src={shop}
          class="Shop"
        />
      </div>
    </div>
  </StylerComponent>;
}
