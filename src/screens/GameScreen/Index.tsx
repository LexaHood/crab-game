import type { StateUpdater } from "preact/hooks";

import type { screens } from "@/App";
import StylerComponent from "@/components/StylerComponent";

import Crab from "./Crab";
import Fishes from "./Fishes";
import style from "./style.scss?inline";
import Ui from "./Ui";

export default function GameScreen({ setScreen }: { setScreen: StateUpdater<keyof typeof screens> }) {
  return <StylerComponent style={style}>
    <div class="GameScreen">
      <Ui />
      <Fishes />
      <Crab />
    </div>
  </StylerComponent>;
}
