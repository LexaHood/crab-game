import { useEffect, useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";
import { misses, totalHealth } from "@/store";

import Hp from "./Hp";
import style from "./lifes.scss?inline";

export default function Lifes() {
  const [health, setHealth] = useState<number[]>([]);

  function spawnLife() {
    setTimeout(() => {
      if (totalHealth - misses.value < 4) {
        setHealth((last) => {
          return last.concat([last.length]);
        });
      }

      spawnLife();
    }, getRandomTime());

  }

  function getRandomTime() {
    return (Math.random() * 20 + 5) * 1000;
  }

  useEffect(() => {
    spawnLife();
  }, []);

  return <StylerComponent style={style}>
    <div class="Healths">
      {health.map((lifeId) => {
        return <Hp key={lifeId}/>;
      })}
    </div>
  </StylerComponent>;
}

