import { useEffect, useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import { misses, totalHealth } from "@/store";

import Hp from "./Hp/Hp";
import style from "./lifes.scss?inline";

export default function Lifes() {
  const [health, setHealth] = useState<number[]>([]);

  function spawnLife() {
    const timerId = setTimeout(() => {
      if (totalHealth - misses.value < 4) {
        setHealth((last) => {
          return last.concat([last.length]);
        });
      }
      spawnLife();
    }, getRandomTime());

    return timerId;
  }

  function getRandomTime() {
    return (Math.random() * 20 + 5) * 1000;
  }

  useEffect(() => {
    const timerId = spawnLife();

    return () => clearTimeout(timerId);
  }, []);

  return <StylerComponent style={style}>
    <div class="Healths">
      {health.map((life, Id) => {
        return <Hp key={Id} />;
      })}
    </div>
  </StylerComponent>;
}

