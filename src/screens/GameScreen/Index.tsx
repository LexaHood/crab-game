import { useEffect, useState } from "preact/hooks";

import background from "@/assets/background.webp";
import StylerComponent from "@/components/StylerComponent";
import { currentScreen, misses, totalHealth } from "@/store";

import Crab from "./Crab/Index";
import Fishes from "./Fishes/Fishes";
import Lifes from "./Lifes/Lifes";
import style from "./style.scss?inline";
import Ui from "./Ui/Ui";

export default function GameScreen() {
  const [count, setCount] = useState(3);

  function startTimer() {
    const timerId = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return timerId;
  }

  useEffect(() => {
    const timerId = startTimer();

    return () => clearTimeout(timerId);
  }, [count]);

  misses.subscribe((value) => {
    if (totalHealth - value <= 0)
      currentScreen.value = "win";
  });

  return <StylerComponent style={style}>
    <div class="GameScreen">
      <img class="GameScreen__bg" src={background} />
      <div
        class="GameScreen__Timer"
        style={{
          display: count <= 0 ? "none" : "block"
        }}
      >
        <h1>{count}</h1>
        <img class="GameScreen__Timer__bg" src={background} />
      </div>
      <Ui />
      <Lifes />
      <Crab />
      <Fishes />
    </div>
  </StylerComponent>;
}

