import { useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";

import style from "./App.scss?inline";
import GameScreen from "./screens/GameScreen/Index";
import StartScreen from "./screens/StartScreen/Index";

export const screens = {
  startScreen: StartScreen,
  gameScreen: GameScreen
} as const;

function App() {
  const [screen, setScreen] = useState<keyof typeof screens>("startScreen");
  // const [screen, setScreen] = useState<keyof typeof screens>('gameScreen')

  const CurrentScreen = screens[screen];

  return <StylerComponent style={style}>
    <div class="GameApp">
      <CurrentScreen setScreen={setScreen} />
    </div>
  </StylerComponent>;
}

export default App;
