import { useEffect, useRef, useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";

import style from "./App.scss?inline";
import GameScreen from "./screens/GameScreen/Index";
import StartScreen from "./screens/StartScreen/Index";

export const screens = {
  startScreen: StartScreen,
  gameScreen: GameScreen
} as const;

export type Tdimensions = { x: number, y: number };

function App() {
  const app = useRef<HTMLDivElement>();
  // const [screen, setScreen] = useState<keyof typeof screens>("startScreen");
  const [screen, setScreen] = useState<keyof typeof screens>("gameScreen");

  const [dimensions, setDimensions] = useState<Tdimensions>();

  const CurrentScreen = screens[screen];

  useEffect(() => {
    if (!app.current) {
      throw new Error("app.current is undefined");
    }

    setDimensions({ 
      x: app.current.clientWidth + 200,
      y: app.current.clientHeight 
    });
  }, []);

  return <StylerComponent style={style}>
    <div 
      ref={app}
      class="GameApp"
    >
      <CurrentScreen
        setScreen={setScreen}
        dimensions={dimensions}
      />
    </div>
  </StylerComponent>;
}

export default App;
