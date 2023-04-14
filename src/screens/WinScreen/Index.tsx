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
          <div class="Score__counter">
            {score}x
            <img
              src={counter}
            />
            =
          </div>
          <div class="Recept">
            <a 
              class="Recept__btn" 
              href="https://freefrontend.com/css-buttons/"
              target="_blank"
            >
              Смотреть рецепт
            </a>
            <img 
              class="Recept__image" 
              src={recept_photo}
            />
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
