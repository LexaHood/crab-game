import { createRef } from "preact";
import { useEffect } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";

import style from "./App.scss?inline";
import GameScreen from "./screens/GameScreen/Index";
import StartScreen from "./screens/StartScreen/Index";
import { appDimensions, currentScreen } from "./store";

export const screens = {
  start: StartScreen,
  game: GameScreen
} as const;

function App() {
  const app = createRef<HTMLDivElement>();

  const CurrentScreen = screens[currentScreen.value];

  useEffect(() => {
    if (!app.current) {
      throw new Error("app.current is undefined");
    }

    appDimensions.value = ({ 
      x: app.current.clientWidth + 200,
      y: app.current.clientHeight 
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
