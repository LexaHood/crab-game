import { useEffect, useState } from "preact/hooks";

import background from "@/assets/background.webp";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen, misses, requiredWinScore, score, totalHealth } from "@/store";

import Crab from "./Crab/Index";
import Fishes from "./Fishes/Fishes";
import Lifes from "./Lifes/Lifes";
import style from "./style.scss?inline";
import Ui from "./Ui/Ui";

export default function GameScreen() {
  const [countTimer, setCountTimer] = useState(3);

  function startTimer() {
    const timerId = setTimeout(() => {
      if (countTimer > 0) setCountTimer((prevCount) => prevCount - 1);
    }, 1000);
    return timerId;
  }

  useEffect(() => {
    const timerId = startTimer();

    return () => clearTimeout(timerId);
  }, [countTimer]);

  misses.subscribe((value) => {
    if (totalHealth - value <= 0) {
      if (score.value >= requiredWinScore) currentScreen.value = "win";
      else currentScreen.value = "lose";
    }
  });

  return <StylerComponent style={style}>
    <div class="GameScreen">
      <img class="GameScreen__bg" src={background} />
      <div
        class="GameScreen__Timer"
        style={{
          display: countTimer <= 0 ? "none" : "block"
        }}
      >
        <h1>{countTimer}</h1>
        <img class="GameScreen__Timer__bg" src={background} />
      </div>
      <Ui />
      <Lifes />
      <Crab />
      <Fishes />
    </div>
  </StylerComponent>;
}

