import { useState } from "preact/hooks";

import background from "@/assets/background.webp";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen } from "@/store";

import style from "./style.scss?inline";

const startButtons = Object.values(import.meta.glob("@/assets/start_button*.png"));

export default function StartScreen() {
  const [startBtn, setStartBtn] = useState<string | null>();
  const [startBtnPushed, setStartBtnPushed] = useState<string | null>();

  // FIXME: ХЗ, мне очень не нравится этот способ - Primose.all, можешь пожалуйста, сказать как сделать лучше?
  Promise.all(startButtons) .then((images) => {
    const [startBtnImage, startBtnPushedImage] = images;
    setStartBtn(startBtnImage.name);
    setStartBtnPushed(startBtnPushedImage.name);
  }).catch((error) => {
    console.error(`Images load: ${error}`);
  });

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
      {startBtn && startBtnPushed && (
        <img
          src={startBtn}
          class="StartScreen__startButton"
          onClick={() => currentScreen.value = "game"}
        />
      )}
    </div>
  </StylerComponent>;
}
