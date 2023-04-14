import { useEffect, useRef } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";

import style from "./App.scss?inline";
import GameScreen from "./screens/GameScreen/Index";
import StartScreen from "./screens/StartScreen/Index";
import WinScreen from "./screens/WinScreen/Index";
import { appDimensions, currentScreen } from "./store";

export const screens = {
  start: StartScreen,
  game: GameScreen,
  win: WinScreen,
} as const;

function App() {
  const app = useRef<HTMLDivElement>(null);
  
  const CurrentScreen = screens[currentScreen.value];

  useEffect(() => {
    if (!app.current) {
      throw new Error("app.current is undefined");
    }

    // TODO: Обновлять на каждый скрол
    
    appDimensions.value = app.current.getBoundingClientRect();
    window.addEventListener("scroll", () => {
      appDimensions.value = (app.current as HTMLDivElement).getBoundingClientRect();
    });
  }, []);

  return <StylerComponent style={style}>
    <div
      ref={app}
      class="GameApp"
    >
      <CurrentScreen />
    </div>
  </StylerComponent>;
}

export default App;
