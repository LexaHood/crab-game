import { useEffect, useRef, useState } from "preact/hooks";

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
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
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

  useEffect(() => {
    document.addEventListener("keyup", onKeyUp);
    return () => document.removeEventListener("keyup", onKeyUp);
  }, []);

  function onKeyUp(event: KeyboardEvent) {
    setPressedKeys((prev) => {
      const result = prev.concat([event.key]);
      const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
      if (JSON.stringify(result.slice(-10)) === JSON.stringify(konamiCode)) {
        console.log("%cПоздравляем, вы обнаружили контакты разработчиков!", "font-size: 20px");
        console.log("%c- https://kopyl.dev", "font-size: 16px");
        console.log("%c- allpetr@list.ru", "font-size: 16px");
      }

      return result;
    });
  }

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
